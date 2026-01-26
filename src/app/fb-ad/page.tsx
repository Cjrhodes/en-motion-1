'use client'

import React from 'react';

export default function FacebookAd() {
  return (
    <div style={{
      width: '1080px',
      height: '1080px',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1f1f 50%, #1a1a1a 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 40%, rgba(196, 30, 58, 0.3) 0%, transparent 50%)',
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '60px',
      }}>
        <p style={{
          fontSize: '28px',
          letterSpacing: '6px',
          marginBottom: '20px',
          color: '#c41e3a',
          fontWeight: 'bold',
        }}>
          EN MOTION PRESENTS
        </p>
        
        <h1 style={{
          fontSize: '72px',
          fontWeight: 'bold',
          lineHeight: '1.1',
          marginBottom: '40px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 20px rgba(0,0,0,0.5)',
        }}>
          WOMEN'S<br/>SELF-DEFENSE<br/>SEMINAR
        </h1>
        
        <div style={{
          background: '#c41e3a',
          padding: '25px 60px',
          borderRadius: '8px',
          marginBottom: '40px',
          display: 'inline-block',
        }}>
          <p style={{
            fontSize: '36px',
            fontWeight: 'bold',
            margin: 0,
          }}>
            Saturday, January 31
          </p>
          <p style={{
            fontSize: '24px',
            margin: '8px 0 0 0',
            opacity: 0.9,
          }}>
            12:00 PM - 2:00 PM
          </p>
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <p style={{
            fontSize: '28px',
            margin: '0 0 10px 0',
            opacity: 0.9,
          }}>
            📍 Miami Shores, FL
          </p>
          <p style={{
            fontSize: '24px',
            margin: 0,
            opacity: 0.7,
          }}>
            Modern Martial Arts and Fitness
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '3px solid #c41e3a',
            borderRadius: '12px',
            padding: '20px 50px',
          }}>
            <p style={{
              fontSize: '56px',
              fontWeight: 'bold',
              margin: 0,
              color: '#fff',
            }}>
              $60
            </p>
            <p style={{
              fontSize: '20px',
              margin: '5px 0 0 0',
              opacity: 0.8,
            }}>
              2-Hour Session
            </p>
          </div>
        </div>
        
        <p style={{
          fontSize: '32px',
          fontWeight: 'bold',
          marginTop: '50px',
          color: '#c41e3a',
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}>
          Learn. Empower. Protect.
        </p>
      </div>
    </div>
  );
}
