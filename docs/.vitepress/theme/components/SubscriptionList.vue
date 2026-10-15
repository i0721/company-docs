<script setup lang="ts">
import { ref } from 'vue'

// 订阅地址统一维护：Windows / Android / iOS 文档共用此列表。
const subscriptions = [
  { group: '6部', url: 'https://sub.nekobox.page/department6' },
  { group: '7部', url: 'https://sub.nekobox.page/department7' },
  { group: '1部B', url: 'https://sub.nekobox.page/department1b' },
  { group: '1部A', url: 'https://sub.nekobox.page/department1a' },
  { group: '市场', url: 'https://sub.nekobox.page/department0' },
] as const

const copiedGroup = ref<string | null>(null)
const copyMessage = ref('')

function legacyCopy(value: string): boolean {
  if (typeof document === 'undefined') return false

  // HTTP/IP 访问等非安全上下文下，尝试兼容旧式复制 API。
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)

  try {
    textarea.focus()
    textarea.select()
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    textarea.remove()
  }
}

async function copyAddress(group: string, url: string) {
  let copied = false

  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url)
      copied = true
    } catch {
      // 浏览器拒绝现代剪贴板 API 时，再尝试兼容处理。
    }
  }

  if (!copied) copied = legacyCopy(url)

  if (copied) {
    copiedGroup.value = group
    copyMessage.value = `已复制 ${group} 订阅地址，可直接粘贴到客户端。`
  } else {
    copiedGroup.value = null
    copyMessage.value = '自动复制被浏览器阻止，请尝试使用 HTTPS 打开文档。'
  }
}
</script>

<template>
  <div class="subscription-list">
    <p class="subscription-tip">点击对应部门的地址即可复制，再粘贴到客户端的 URL 输入框。</p>
    <div class="subscription-table-wrap">
      <table class="subscription-table">
        <thead>
          <tr>
            <th scope="col">节点分组</th>
            <th scope="col">订阅地址 · 点击复制</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in subscriptions" :key="item.group">
            <th scope="row">{{ item.group }}</th>
            <td>
              <button
                type="button"
                class="subscription-copy"
                :aria-label="`复制${item.group}订阅地址`"
                @click="copyAddress(item.group, item.url)"
              >
                <code class="subscription-url">{{ item.url }}</code>
                <span class="subscription-copy-label" :class="{ 'is-copied': copiedGroup === item.group }">
                  {{ copiedGroup === item.group ? '✓ 已复制' : '复制' }}
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-if="copyMessage" class="subscription-feedback" role="status" aria-live="polite">{{ copyMessage }}</p>
  </div>
</template>

<style scoped>
.subscription-list { margin: 16px 0 24px; }
.subscription-tip { margin: 0 0 12px; color: var(--vp-c-text-2); font-size: 14px; }
.subscription-table-wrap { overflow-x: auto; border: 1px solid var(--vp-c-divider); border-radius: 10px; }
.subscription-table { width: 100%; display: table; margin: 0; border: 0; border-collapse: collapse; font-size: 14px; }
.subscription-table th, .subscription-table td { border: 0; padding: 12px; text-align: left; vertical-align: middle; }
.subscription-table thead { background: var(--vp-c-bg-soft); }
.subscription-table thead th { font-weight: 600; white-space: nowrap; }
.subscription-table tbody tr + tr { border-top: 1px solid var(--vp-c-divider); }
.subscription-table tbody th { white-space: nowrap; width: 85px; font-weight: 600; }
.subscription-copy {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 14px; padding: 10px 12px; border: 1px solid var(--vp-c-divider);
  border-radius: 8px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
  cursor: pointer; text-align: left; transition: border-color .15s ease, background-color .15s ease;
}
.subscription-copy:hover { border-color: var(--vp-c-brand-1); background: var(--vp-c-bg-alt); }
.subscription-copy:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.subscription-url { font-size: 12px; line-height: 1.5; word-break: break-all; color: inherit; background: transparent; padding: 0; white-space: normal; }
.subscription-copy-label { flex-shrink: 0; min-width: 45px; text-align: center; color: var(--vp-c-brand-1); font-weight: 600; }
.subscription-copy-label.is-copied { color: var(--vp-c-green-1); }
.subscription-feedback { margin: 10px 0 0; color: var(--vp-c-text-2); font-size: 13px; }
@media (max-width: 640px) {
  .subscription-table th, .subscription-table td { padding: 9px 8px; }
  .subscription-table tbody th { width: 56px; }
  .subscription-copy { padding: 9px; gap: 8px; }
  .subscription-url { font-size: 11px; }
}
</style>
