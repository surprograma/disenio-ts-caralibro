export abstract class Publicacion {
  abstract espacioQueOcupa(): number;
}

export class Foto extends Publicacion {
  constructor(public alto: number, public ancho: number) {
    super();
  }

  override espacioQueOcupa(): number {
    // TODO: modificar esto para que el valor se pueda cambiar (para todas las fotos a la vez)
    const factorDeCompresion = 0.7;

    return Math.ceil(this.alto * this.ancho * factorDeCompresion);
  }
}

export class Texto extends Publicacion {
  constructor(public contenido: string) {
    super();
  }

  override espacioQueOcupa(): number {
    return this.contenido.length;
  }
}
