/**
 * Retrieves the safe area information including the top and bottom positions.
 *
 * @return {Promise} A Promise that resolves to an object containing the top and bottom positions of the safe area.
 */
export function getSafeArea() {
  return new Promise((resolve) => {
    wx.getSystemInfo({
      success: ({ safeArea, screenHeight, statusBarHeight }) => {
        // 胶囊区域
        const { height, top } = wx.getMenuButtonBoundingClientRect()

        resolve({
          top: statusBarHeight + height + (top - statusBarHeight) * 2,
          bottom: safeArea ? screenHeight - safeArea.bottom : 0,
        })
      },
    })
  })
}
