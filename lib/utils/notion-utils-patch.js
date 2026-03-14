/**
 * 补丁文件：修复 notion-utils 中的 uuidToId 函数
 * 这个函数在调用 replaceAll 时可能会遇到未定义的变量
 */

// 安全的 uuidToId 实现
function safeUuidToId(uuid) {
  if (!uuid || typeof uuid !== 'string') {
    console.warn('uuidToId received invalid input:', uuid);
    return uuid || '';
  }

  try {
    // 模拟 notion-utils 中的 uuidToId 函数
    return uuid.replaceAll('-', '');
  } catch (error) {
    console.error('Error in uuidToId:', error, 'uuid:', uuid);
    return uuid;
  }
}

// 导出安全版本供其他模块使用
export { safeUuidToId as uuidToId };