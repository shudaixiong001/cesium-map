/*
 * @Author: Caven
 * @Date: 2020-01-21 16:10:47
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-23 09:56:23
 */

const ELEC_URL =
  'https://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid={style}&scene=0&version=347'

class TencentImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    options['url'] = ELEC_URL.replace('{style}', options.style || 1)
    if (!options.subdomains || !options.subdomains.length) {
      options['subdomains'] = ['0', '1', '2']
    }
    super(options)
  }
}

export default TencentImageryProvider
