import { map, sum } from "ramda";
import { Publicacion } from "./publicacion";

export class Usuario {
  publicaciones: Publicacion[] = [];

  agregarPublicacion(publicacion: Publicacion): void {
    this.publicaciones.push(publicacion);
  }

  espacioDePublicaciones(): number {
    return sum(map((it) => it.espacioQueOcupa(), this.publicaciones));

    // También se puede escribir así:
    //
    // return compose(
    //   sum,
    //   map((it) => it.espacioQueOcupa())
    // )(this.publicaciones);
  }
}
