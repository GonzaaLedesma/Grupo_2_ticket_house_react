import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div id="footerBox">
    <div id="iconsFooter">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-tiktok"></i>
    </div>
    <ul id="helpList">
      <li class="itemFooter">FAQ</li>
      <li class="itemFooter">|</li>
      <li class="itemFooter">Sobre</li>
      <li class="itemFooter">|</li>
      <li class="itemFooter">Contacto</li>
      <li class="itemFooter">|</li>
      <li class="itemFooter">Artistas</li>
      <li class="itemFooter">|</li>
      <li class="itemFooter">Terminos y Condiciones</li>
      <li class="itemFooter">|</li>
      <li class="itemFooter">Politicas</li>
    </ul>
  </div>
  )
}

export default Footer