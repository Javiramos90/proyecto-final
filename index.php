<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style2.css">
    <!-- importaciones mapa España -->
    <link href="css/estilos.css" type="text/css" rel="stylesheet" />
    <link href="css/jquery.qtip.min.css" type="text/css" rel="stylesheet" />
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/jquery.qtip.min.js"></script>
    <script src="js/javascript.js"></script>
    <!-- fin importaciones mapa España -->
    <title>SRF</title>

</head>

<body>
    <header>
        <nav class="navbar">
            <ul class="navbar-content">
                <li class="dropdown">
                    <a href="index.php"><img src="Imagenes/logo_SRF_sinFondo.png" alt=""></a>
                </li>
                <li class="dropdown">
                    <a href="#">Conocenos</a>
                    <div class="contenido-barra">
                        <a href="#">
                            <pre>Quienes Somos</pre>
                        </a>
                        <a href="#">
                            <pre>Aviso Legal</pre>
                        </a>
                        <a href="#">
                            <pre>Politica de<br>Privacidad</pre>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#">Lugares</a>
                    <div class="contenido-barra">
                        <a href="andalucia.php">
                            <pre>Andalucia</pre>
                        </a>
                        <a href="aragon.php">
                            <pre>Aragon</pre>
                        </a>
                        <a href="asturias.php">
                            <pre>Asturias</pre>
                        </a>
                        <a href="baleares.php">
                            <pre>Islas Baleares</pre>
                        </a>
                        <a href="canarias.php">
                            <pre>Canarias</pre>
                        </a>
                        <a href="cantabria.php">
                            <pre>Cantabria</pre>
                        </a>
                        <a href="castilla-y-leon.php">
                            <pre>Castilla y Leon</pre>
                        </a>
                        <a href="castlla-la-mancha.php">
                            <pre>Castilla-La<br>Mancha</pre>
                        </a>
                        <a href="cataluña.php">
                            <pre>Cataluña</pre>
                        </a>
                        <a href="valencia.php">
                            <pre>Valencia</pre>
                        </a>
                        <a href="extremadura.php">
                            <pre>Extremadura</pre>
                        </a>
                        <a href="galicia.php">
                            <pre>Galicia</pre>
                        </a>
                        <a href="madrid.php">
                            <pre>Madrid</pre>
                        </a>
                        <a href="murcia.php">
                            <pre>Murcia</pre>
                        </a>
                        <a href="navarra.php">
                            <pre>Navarra</pre>
                        </a>
                        <a href="pais-vasco.php">
                            <pre>Pais Vasco</pre>
                        </a>
                        <a href="la-rioja.php">
                            <pre>La Rioja</pre>
                        </a>
                        <a href="ceuta-y-melilla.php">
                            <pre>Ceuta y Melilla</pre>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#">
                        <pre>Proxima Parada</pre>
                    </a>
                    <div class="contenido-barra">
                        <a href="#">
                            <pre>Viaje paso<br>a paso</pre>
                        </a>
                        <a href="#">
                            <pre>Consultas</pre>
                        </a>
                        <a href="#">
                            <pre>Pases para<br>Eventos</pre>
                        </a>
                        <a href="#">
                            <pre>Tarjetas de<br>viaje</pre>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#">Gastronomia</a>
                    <div class="contenido-barra">
                        <a href="#">
                            <pre>Donde comer</pre>
                        </a>
                        <a href="#">
                            <pre>Que comer</pre>
                        </a>
                        <a href="#">
                            <pre>Recetas<br>populares</pre>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#">
                        <pre>Como será tu viaje</pre>
                    </a>
                    <div class="contenido-barra">
                        <a href="#">
                            <pre>Escapadas</pre>
                        </a>
                        <a href="#">
                            <pre>Viaje Corto</pre>
                        </a>
                        <a href="#">
                            <pre>Viaje Largo</pre>
                        </a>
                    </div>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <div class="navbar-buscador-login">
                    <li class="buscador">
                        <a href="#" id="img-buscar"><img src="Imagenes/buscador.png" alt="Buscar"></a>
                        <div class="buscar">
                            <input type="text" class="input-buscar mostrar" id="input-buscar"
                                placeholder="¿En que puedo ayudarte?">
                            <button class="input-buscar mostrar" id="btn-buscar"><b>Buscar</b></button>
                        </div>
                    </li>
                    <li class="login">
                        <a href="#" id="img-login"><img src="Imagenes/logo-login.png" alt="login"></a>
                        <form class="input-login visible" id="input-login">
                            <div class="sesion">
                                <input type="email" name="email" required placeholder="Correo electrónico">
                                <input type="password" name="password" required placeholder="Contraseña">
                            </div>
                            <div class="boton">
                                <input type="submit" name="login" value="Iniciar Sesión">
                                <input type="button" value="Registrarse">
                            </div>
                        </form>
                    </li>
                </div>
            </ul>
        </nav>
        <div class="img-container">
            <div class="img-portada">
                <div>
                    <h1 class="titulo">Descubre España<br>Sin Rumbo Fijo</h1>
                </div>
                <div class="slide"
                    style="background-image: radial-gradient(circle, rgba(52, 128, 58, 0), rgba(252, 252, 252, 0)), url('Imagenes/portada/portada-mochilas.jpg');">
                </div>
                <div class="slide"
                    style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('Imagenes/portada/portada-montaña.jpg');">
                </div>
                <div class="slide"
                    style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('Imagenes/portada/portada_desierto2.jpg');">
                </div>
                <div class="slide"
                    style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('Imagenes/portada/portada_montana_nevada2.jpg');">
                </div>
                <div class="slide"
                    style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('Imagenes/portada/portada_playa2.jpg');">
                </div>


                <!-- <img  src="Imagenes/portada/portada-mochilas.jpg" alt="imagen 1" class="slide activo">
                <img src="Imagenes/portada/portada_playa2.jpg" alt="imagen 2" class="slide">
                <img src="Imagenes/portada/portada-montaña.jpg" alt="imagen 3" class="slide">
                <img src="Imagenes/portada/portada_desierto2.jpg" alt="imagen 4" class="slide">
                <img src="Imagenes/portada/portada_montana_nevada2.jpg" alt="imagen 5" class="slide"> -->
            </div>
        </div>
    </header>
    <main>
        <h2>
            Te invitamos a explorar España como nunca antes. Descubre pueblos encantadores, playas
            escondidas, rutas de montaña y la vibrante cultura española. Te llevamos a través de cada rincón de este
            país diverso, con consejos, historias y recomendaciones para que tu aventura en España sea inolvidable
        </h2>

        <h3>¡BIENVENID@ A PROXIMO DESTINO!</h3>

        <div class="mapa">
            <?php
            include_once "mapa.html";
            ?>
        </div>
    </main>
    <footer>
        <div class="endPage">
            <div class="formNombre">
                <p>Nombre</p>
                <input type="text" placeholder="Nombre/Name">
            </div>
            <div class="formEmail">
                <p>Correo</p>
                <input type="email" placeholder="Correo Electronico/Email">
            </div>
        </div>
        <div class="botonFormulario">
            <button class="btn-form">¡Suscribirme!</button>
            <div class="check">
                <input type="checkbox">
                <p>&nbsp;He leido y acepto la Politica de Privacidad</p>
            </div>
            <div class="politica">
                <!--Enlace para ventana modal de politica de privacidad  -->
                <p>Los datos de carácter personal serán tratados de forma segura, cumpliendo con el RGPD (Reglamento
                    General de Protección de Datos). Podrás ejercer tus derechos de acceso, rectificación, limitación y
                    eliminación definitiva de los datos. Más información en nuestra &nbsp;<button class="open-modal-btn"
                        onclick="openModal()">política de privacidad.</button></p>
            </div>
        </div>
    </footer>
    <script src="js/principal.js"></script>
</body>

</html>