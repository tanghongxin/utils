/**
 * Retrieves the safe area information including the top and bottom positions.
 *
 * @return A Promise that resolves to an object containing the top and bottom positions of the safe area.
 */
export function getSafeArea(): Promise<{ top: number; bottom: number }> {
  return new Promise((resolve) => {
    wx.getSystemInfo({
      success: ({ safeArea, screenHeight, statusBarHeight }) => {
        // Capsule area
        const { height, top } = wx.getMenuButtonBoundingClientRect();

        resolve({
          top: statusBarHeight + height + (top - statusBarHeight) * 2,
          bottom: safeArea ? screenHeight - safeArea.bottom : 0,
        });
      },
    });
  });
}
