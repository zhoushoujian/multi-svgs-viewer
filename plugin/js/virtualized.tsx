/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable react/sort-comp */
import * as React from 'react';
import { CellMeasurer, CellMeasurerCache, AutoSizer, createMasonryCellPositioner, Masonry } from 'react-virtualized';

type Props = {
  height: number;  //容器的高度
  columnWidth: number; //每一个砖块的宽度
  cellCount: number; //砖石块的总数
  childElementFunc: (index: number, style: any) => any;
};

export default class Virtualized extends React.PureComponent<Props> {
  _columnCount: number;
  _cache: any;
  _width: number;
  _cellPositioner: any;
  _masonry: any;
  _height: any;

  constructor(props) {
    super(props);
    this._columnCount = 0;
    this._width = 0;
    this._cache = new CellMeasurerCache({});
  }

  _cellRenderer = ({ index, key, parent, style }) => {
    const { childElementFunc } = this.props;
    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        { () => childElementFunc(index, style) }
      </CellMeasurer>
    );
  };

  _calculateColumnCount() {
    const { columnWidth } = this.props;
    this._columnCount = Math.floor(this._width / (columnWidth + 10));
  }

  _initCellPositioner() {
    if (typeof this._cellPositioner === 'undefined') {
      const { columnWidth } = this.props;
      this._cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: this._columnCount,
        columnWidth,
        spacer: 10,
      });
    }
  }

  _renderMasonry = ({ width }) => {
    const { height, cellCount } = this.props;
    this._width = width;
    this._calculateColumnCount();
    this._initCellPositioner();
    return (
      <Masonry
        cellCount={cellCount}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this._cellRenderer}
        height={height}
        ref={(ref) => {
          this._masonry = ref;
        }}
        width={width}
      />
    );
  };

  _resetCellPositioner = () => {
    const { columnWidth } = this.props;
    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth,
      spacer: 10,
    });
  };

  _onResize = ({ width }) => {
    this._width = width;
    this._calculateColumnCount();
    this._resetCellPositioner();
    this._masonry.recomputeCellPositions();
  };

  _renderAutoSizer = ({ height }) => {
    this._height = height;
    return (
      <AutoSizer height={height} onResize={this._onResize}>
        {this._renderMasonry}
      </AutoSizer>
    );
  };

  render() {
    const { height } = this.props;
    return (
      <div style={{ height, width: "100%" }}>
        {this._renderAutoSizer({ height })}
      </div>
    );
  }
}
