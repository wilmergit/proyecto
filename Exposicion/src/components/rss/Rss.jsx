function Rss() {
    return (

        <rss version="2.0">
            <channel>
                <title>Juegos mas populares</title>
                <description>Dedicated section to highlight the most 
                    popular games from this week</description>
                <link>https://as.com/meristation/juegos/top/?omnil=mpal</link>
                <item>
                    <!-- Titulo del elemento del feed -->
                    <title>Prueba Final</title>
                    <!-- Descripcion de la actualizacion del sitio que este elemento representa, puede contener cuanto texto e imagenes necesite-->
                    <description>Descripción detallada de los elementos de un Feed RSS</description>
                    <!-- Enlace a la seccion del sitio-->
                    <link>https://ejemplo-rss.glitch.me/</link>
                    <!-- Fecha de publicación -->
                    <pubDate>Mon, 30 Dic 2019 23:00:00 EST</pubDate>
                </item>
                <item>
                    <title>Demostración</title>
                    <description>Abriremos nuestro sitio web desde un lector RSS y veamos que pasa</description>
                    <link>https://ejemplo-rss.glitch.me/</link>
                    <pubDate>Sun, 29 Dic 2019 15:00:00 EST</pubDate>
                </item>
                <item>
                    <title>Enlazar el feed desde el encabezado HTML</title>
                    <description>Como enlazar el feed desde el encabezado de modo que los lectores RSS lo puedan localizar</description>
                    <link>https://ejemplo-rss.glitch.me/</link>
                    <pubDate>Sat, 28 Dic 2019 15:00:00 EST</pubDate>
                </item>
                <item>
                    <title>Ejemplo de un Feed RSS</title>
                    <description>Un ejemplo del codigo completo de un feed RSS</description>
                    <link>https://ejemplo-rss.glitch.me/</link>
                    <pubDate>Fri, 27 Dic 2019 15:00:00 EST</pubDate>
                </item>
                <item>
                    <title>Multimedia en RSS</title>
                    <description><![CDATA[Ejemplo de como agregar una imagen al RSS, hacemos uso de CDATA para poner codigo HTML dentro del RSS, como la siguiente imagen <img src="https://cdn.glitch.com/6db38f9b-90fb-4ac8-a53a-110244e13c36%2Ffeedly.png?v=1577638836439" alt="Captura de pantalla de Feedly" />]]></description>
                    <link>https://ejemplo-rss.glitch.me/</link>
                    <pubDate>Thu, 26 Dic 2019 14:00:00 EST</pubDate>
                </item>
                <item>
                    <title>Etiquetas de un Feed RSS</title>
                    <description>Que etiquetas forman un feed RSS</description>
                    <link>https://ejemplo-rss.glitch.me//</link>
                    <pubDate>Wed, 25 Dic 2019 14:00:00 EST</pubDate>
                </item>
                <item>
                    <title>¿Que es un feed RSS?</title>
                    <description>Explicación de que es un Feed RSS</description>
                    <link>https://ejemplo-rss.glitch.me//</link>
                    <pubDate>Thu, 24 Dic 2019 13:00:00 EST</pubDate>
                </item>
                <item>
                    <title>Anunciando tutorial de como hacer un RSS a mano</title>
                    <description>Anunciando tutorial de como hacer un RSS a mano</description>
                    <link>https://ejemplo-rss.glitch.me//</link>
                    <pubDate>Mon, 23 Dic 2019 08:00:00 EST</pubDate>
                </item>
            </channel>
        </rss>

    )
}

export default Rss;