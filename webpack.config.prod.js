const imagemin = require( "imagemin" )
const webp = require( "imagemin-webp" )

imagemin( ['src/img/*.{jpg,png}'], {
    destination: 'src/img',
    plugins: [
        webp( { quality: 60 } )
    ]
} )