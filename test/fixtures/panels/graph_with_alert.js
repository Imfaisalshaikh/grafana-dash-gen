// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

module.exports = {
  alert: {
    name: 'Panel Title alert',
    conditions: [{
      type: 'query',
      query: {
        params: [
          'B',
          '5m',
          'now'
        ]
      },
      reducer: {
        type: 'min',
        params: []
      },
      evaluator: {
        type: 'gt',
        params: [1.1]
      },
      operator: {
        type: 'and'
      }
    }],
    for: '15m',
    frequency: '5m',
    message: '',
    notifications: [],
    executionErrorState: 'keep_state',
    noDataState: 'keep_state',
    alertRuleTags: {},
    handler: 1,
  },
  aliasColors: {},
  bars: false,
  editable: true,
  error: false,
  fill: 0,
  grid: {
    leftMax: null,
    leftMin: null,
    rightMax: null,
    rightMin: null,
    threshold1: null,
    threshold1Color: 'rgba(216, 200, 27, 0.27)',
    threshold2: null,
    threshold2Color: 'rgba(234, 112, 112, 0.22)'
  },
  id: 1,
  legend: {
    avg: true,
    current: false,
    max: true,
    min: false,
    show: true,
    total: false,
    values: true
  },
  lines: true,
  linewidth: 1,
  links: [],
  nullPointMode: 'null as zero',
  percentage: false,
  pointradius: 5,
  points: false,
  renderer: 'flot',
  seriesOverrides: [{}],
  span: 12,
  stack: false,
  steppedLine: false,
  targets: [{ hide: undefined, refId: 'A', target: 'firstTarget' }],
  title: 'no title (click here)',
  tooltip: {
    shared: false,
    value_type: 'cumulative'
  },
  type: 'graph',
  'x-axis': true,
  'y-axis': true,
  y_formats: ['short', 'short'],
  datasource: 'graphite'
};
