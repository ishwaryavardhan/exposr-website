// src/lib/auth.ts

// This file provides Edge-compatible token signing and verification using Web Crypto API
// because Next.js Middleware doesn't support Node.js native 'crypto' module.

const textEncoder = new TextEncoder();

async function getSecretKey() {
    const secret = process.env.ADMIN_PASSWORD || 'fallback-do-not-use-in-production';
    return await crypto.subtle.importKey(
        'raw',
        textEncoder.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign', 'verify']
    );
}

// Convert ArrayBuffer to Hex String
function bufferToHex(buffer: ArrayBuffer): string {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Convert Hex String to Uint8Array
function hexToBuffer(hex: string): Uint8Array {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return bytes;
}

export async function createToken(payloadStr: string): Promise<string> {
    const key = await getSecretKey();
    const encodedPayload = textEncoder.encode(payloadStr);
    
    // Sign the payload
    const signatureBuffer = await crypto.subtle.sign(
        'HMAC',
        key,
        encodedPayload
    );
    
    const signatureHex = bufferToHex(signatureBuffer);
    
    // Convert payload to base64 for easy transport alongside signature
    const payloadBase64 = Buffer.from(payloadStr).toString('base64');
    
    return `${payloadBase64}.${signatureHex}`;
}

export async function verifyToken(token: string): Promise<boolean> {
    try {
        const parts = token.split('.');
        if (parts.length !== 2) return false;
        
        const [payloadBase64, signatureHex] = parts;
        const payloadStr = Buffer.from(payloadBase64, 'base64').toString('utf-8');
        const signatureBytes = hexToBuffer(signatureHex);
        const encodedPayload = textEncoder.encode(payloadStr);
        const key = await getSecretKey();

        return await crypto.subtle.verify(
            'HMAC',
            key,
            signatureBytes.buffer as ArrayBuffer,
            encodedPayload
        );
    } catch (e) {
        return false;
    }
}
