import { Foto, Texto } from "./publicacion";
import { Usuario } from "./usuario";

describe("Caralibro", () => {
  const saludoCumpleanios = new Texto(
    "Felicidades Pepito, que los cumplas muy feliz"
  );
  const fotoEnCuzco = new Foto(768, 1024);

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
