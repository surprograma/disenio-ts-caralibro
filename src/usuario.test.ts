import { Foto, Publicacion, Texto } from "./publicacion";
import { Usuario } from "./usuario";

describe("Caralibro", () => {
  let saludoCumpleanios: Publicacion, fotoEnCuzco: Publicacion;

  /* 
    Los objetos que se comparten entre tests los inicializamos dentro de un bloque `beforeEach`.
    Si no lo hacemos así, los efectos de un test afectan a los demás y se vuelve cada vez más
    complicado entender por qué está fallando.
   */
  beforeEach(() => {
    saludoCumpleanios = new Texto(
      "Felicidades Pepito, que los cumplas muy feliz"
    );
    fotoEnCuzco = new Foto(768, 1024);
  });

  describe("Una publicación", () => {
    describe("de tipo foto", () => {
      it("ocupa ancho * alto * compresion bytes", () => {
        expect(fotoEnCuzco.espacioQueOcupa()).toBe(550503);
      });
    });

    describe("de tipo texto", () => {
      it("ocupa tantos bytes como su longitud", () => {
        expect(saludoCumpleanios.espacioQueOcupa()).toBe(45);
      });
    });
  });

  describe("Un usuario", () => {
    it("puede calcular el espacio que ocupan sus publicaciones", () => {
      const juana = new Usuario();
      juana.agregarPublicacion(fotoEnCuzco);
      juana.agregarPublicacion(saludoCumpleanios);
      expect(juana.espacioDePublicaciones()).toBe(550548);
    });
  });
});
