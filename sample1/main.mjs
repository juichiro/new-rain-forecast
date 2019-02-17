/* global Y */

/**
 * プログラムのエントリーポイント
 * この関数が最初に実行される
 */
async function main() {
  // 地図を初期化
  const map = new Y.Map('map');
  const zoomLevel = 17;
  const lng = 35.282588;
  const lat = 139.669987;
  map.drawMap(new Y.LatLng(lng, lat), zoomLevel, Y.LayerSetId.NORMAL);

  // コントロールの追加
  const sliderZoomControl = new Y.SliderZoomControlVertical();
  map.addControl(sliderZoomControl);
}

main();
