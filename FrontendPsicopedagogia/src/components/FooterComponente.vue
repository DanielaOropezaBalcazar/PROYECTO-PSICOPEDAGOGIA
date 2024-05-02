<template>
  <section>
    <footer class="text-center mt-4 footer-bg" style="color: #333; padding-top: 10px;">
      <div class="footer-content">
        <div class="footer-left">
          <a href="https://www.facebook.com/tucuenta" target="_blank"
             style="color:white; display: block; text-decoration: none;">
            <img src="../assets/images/Footer/ucblogo.png" alt="UCB Logo" height="80"
                 style="margin-bottom: 10px;">
          </a>
        </div>
        <div class="footer-center">
          <p style="font-size: 12px; color: white">
            © Copyright Universidad Católica Boliviana "San Pablo" Regional La Paz | Desarrollado por Checkmark SRL | Todos los derechos reservados.
          </p>
        </div>
        <div class="footer-right">
          <div>
            <a href="https://www.facebook.com/tucuenta" target="_blank"
               style="color:white; display: block; text-decoration: none;">
              <img src="../assets/images/Footer/facebook_logo.png" alt="Facebook" height="50"
                   style="margin-bottom: 10px;">
            </a>
          </div>
          <div>
            <a href="https://twitter.com/tucuenta" target="_blank"
               style="color:white; display: block; text-decoration: none;">
              <img src="../assets/images/Footer/instagram_logo.png" alt="Instagram" height="50"
                   style="margin-bottom: 10px;">
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/tucuenta" target="_blank"
               style="color:white; display: block; text-decoration: none;">
              <img src="../assets/images/Footer/tiktok_logo.png" alt="Tiktok"  height="50"
                   style="margin-bottom: 10px;">
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/tucuenta" target="_blank"
               style="color:white; display: block; text-decoration: none;">
              <img src="../assets/images/Footer/youtube_logo.png" alt="Youtube"  height="50"
                   style="margin-bottom: 10px;">
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/tucuenta" target="_blank"
               style="color:white; display: block; text-decoration: none;">
              <img src="../assets/images/Footer/whatsapp_logo.png" alt="WhatsApp"  height="50"
                   style="margin-bottom: 10px;">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'FooterComponente'
}
</script>

<style>
.footer-bg {
  background-image: url('../assets/images/Footer/fondo_footer.png');
  background-size: cover;
  background-position: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-left {
  flex: 1; /* Ocupa todo el espacio disponible */
  display: flex;
  justify-content: flex-start; /* Alinea los elementos al final del contenedor */
  align-items: center;
  margin-left: 20px;
}

.footer-center {
  flex: 1; /* Ocupa todo el espacio disponible */
  margin-top: 20px;
}

.footer-right {
  flex: 1; /* Ocupa todo el espacio disponible */
  display: flex;
  justify-content: flex-end; /* Alinea los elementos al final del contenedor */
  align-items: center; /* Alinea verticalmente los elementos */
}

.footer-right div {
  margin-right: 20px;
  text-align: center;
}
</style>
