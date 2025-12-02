<script setup lang="ts">

</script>

<template>
  <div class="info-card">
    <div class="card-header">
      <slot name="header">Kein Titel</slot>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>

    <div class="card-footer">
      <slot name="footer">&copy; 2025</slot>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  margin: 12px;
  padding: 16px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(250,250,250,0.88));
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 6px 18px rgba(16,24,40,0.12), 0 2px 6px rgba(16,24,40,0.06);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(16,24,40,0.14), 0 4px 10px rgba(16,24,40,0.08);
}

.card-header {
  font-weight: 600;
  font-size: 1.05rem;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-body {
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.45;
  min-height: 48px;
}

.card-footer {
  font-size: 0.85rem;
  color: #64748b;
  border-top: 1px solid rgba(15,23,42,0.04);
  padding-top: 8px;
}
</style>