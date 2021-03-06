import { Space, Space_Block, Space_Empty } from "./spaces";

export const enum BlockType {
  I,
  O,
  Z,
  S,
  J,
  L,
  T,
  Empty,
}

export class Block {
  _position: Space[][];
  _direction: number;
  protected _type: BlockType;
  protected _color: string;
  protected _border: string;

  constructor() {
    this._border = "1px solid black";
  }

  get type() {
    return this._type;
  }
  get color() {
    return this._color;
  }
  get border() {
    return this._border;
  }
}

export class Block_Empty extends Block {
  constructor(position: Space[][]) {
    super();

    this._direction = 0;
    this._border = "1px dotted black";
    this._type = BlockType.Empty;
    this._color = "";
    this._position = position;
  }
}

export class Block_I extends Block {
  constructor() {
    super();

    this._direction = 0;
    this._type = BlockType.I;
    this._color = "#fb3640";
    this._position = [
      [new Space_Block(this._color)],
      [new Space_Block(this._color)],
      [new Space_Block(this._color)],
      [new Space_Block(this._color)],
    ];
  }
}

export class Block_O extends Block {
  constructor() {
    super();

    this._direction = 0;
    this._type = BlockType.O;
    this._color = "#d8e3e7";
    this._position = [
      [new Space_Block(this._color), new Space_Block(this._color)],
      [new Space_Block(this._color), new Space_Block(this._color)],
    ];
  }
}

export class Block_Z extends Block {
  constructor() {
    super();

    this._direction = 0;
    this._type = BlockType.Z;
    this._color = "#8bf7ba";
    this._position = [
      [
        new Space_Block(this._color),
        new Space_Block(this._color),
        new Space_Empty(),
      ],
      [
        new Space_Empty(),
        new Space_Block(this._color),
        new Space_Block(this._color),
      ],
    ];
  }
}

export class Block_S extends Block {
  constructor() {
    super();

    this._direction = 0;
    this._type = BlockType.S;
    this._color = "#206a5d";
    this._position = [
      [
        new Space_Empty(),
        new Space_Block(this._color),
        new Space_Block(this._color),
      ],
      [
        new Space_Block(this._color),
        new Space_Block(this._color),
        new Space_Empty(),
      ],
    ];
  }
}

export class Block_J extends Block {
  constructor() {
    super();

    this._direction = 0;
    this._type = BlockType.J;
    this._color = "#f0c929";
    this._position = [
      [new Space_Empty(), new Space_Block(this._color)],
      [new Space_Empty(), new Space_Block(this._color)],
      [new Space_Block(this._color), new Space_Block(this._color)],
    ];
  }
}

export class Block_L extends Block {
  constructor() {
    super();

    this._direction = 0;
    this._type = BlockType.L;
    this._color = "#04009a";
    this._position = [
      [new Space_Block(this._color), new Space_Empty()],
      [new Space_Block(this._color), new Space_Empty()],
      [new Space_Block(this._color), new Space_Block(this._color)],
    ];
  }
}

export class Block_T extends Block {
  constructor() {
    super();

    this._direction = 0;
    this._type = BlockType.T;
    this._color = "#763857";
    this._position = [
      [
        new Space_Block(this._color),
        new Space_Block(this._color),
        new Space_Block(this._color),
      ],
      [new Space_Empty(), new Space_Block(this._color), new Space_Empty()],
    ];
  }
}
