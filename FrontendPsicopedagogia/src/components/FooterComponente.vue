<template>
  <section>
    <footer class="text-center mt-4" :style="{ backgroundColor: footerColor, color: '#333', padding: '0px' }">
      <div style="display: flex; justify-content: center;">
        <div style="margin-right: 20px; text-align: center;">
          <a href="https://www.facebook.com/tucuenta" target="_blank"
            style="color:black; display: block; text-decoration: none;">
            <img src="../assets/images/Contactos/facebook.png" alt="Facebook" width="50" height="50"
              style="margin-bottom: 10px;">
            Facebook
          </a>
        </div>
        <div style="margin-right: 20px; text-align: center;">
          <a href="https://twitter.com/tucuenta" target="_blank"
            style="color:black; display: block; text-decoration: none;">
            <img src="../assets/images/Contactos/x.png" alt="Twitter" width="50" height="50" style="margin-bottom: 10px;">
            Twitter
          </a>
        </div>
        <div style="text-align: center;">
          <a href="https://www.instagram.com/tucuenta" target="_blank"
            style="color:black; display: block; text-decoration: none;">
            <img src="../assets/images/Contactos/instagram.png" alt="Instagram" width="50" height="50"
              style="margin-bottom: 10px;">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  </section>
  </template>
  


  <script>
  export default {
      name: 'FooterComponente',
      data() {
          return {
              footerColor: '#FFFFFF'  // Color inicial del footer
          };
      },
      methods: {
          changeFooterColor(color) {
              this.footerColor = color;  
          }
      }
  }
  </script>
  