import { calculateDistance } from '../lib/utils';
import { describe, it, expect } from 'vitest';

describe('GPS Distance Calculation (Haversine)', () => {
  it('should calculate distance correctly between two close points', () => {
    // Point A: 23.8103, 90.4125 (Dhaka)
    // Point B: 23.8105, 90.4125 (Slightly north)
    const distance = calculateDistance(23.8103, 90.4125, 23.8105, 90.4125);
    
    // 0.0002 degrees latitude difference is approximately 22 meters
    expect(distance).toBeGreaterThan(20);
    expect(distance).toBeLessThan(25);
  });

  it('should return 0 for the same points', () => {
    const distance = calculateDistance(23.8103, 90.4125, 23.8103, 90.4125);
    expect(distance).toBe(0);
  });
});
