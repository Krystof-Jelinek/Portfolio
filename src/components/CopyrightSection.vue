<template>
  <div class="copyright">
    <p>© 2026 Kryštof Jelínek</p>
  </div>
</template>

<style scoped>
.copyright {
  background-color: #333;
  color: #fff;

  padding: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright p {
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
}

@media (max-width: 768px) {
  .copyright {
    padding: 10px 0;
  }

  .copyright p {
    font-size: 1rem;
  }
}
</style>