const expectedDescriptor = {
  namespaces: {
    routeguide: {
      name: 'routeguide',
      messages: {
        Point: {
          name: 'Point',
          fields: [{
            name: 'latitude',
            type: 'int32',
            id: 1,
            required: false,
            repeated: false,
            map: false,
            defaultValue: 0
          },
            {
              name: 'longitude',
              type: 'int32',
              id: 2,
              required: false,
              repeated: false,
              map: false,
              defaultValue: 0
            }
          ]
        },
        Rectangle: {
          name: 'Rectangle',
          fields: [{
            name: 'lo',
            type: 'Point',
            id: 1,
            required: false,
            repeated: false,
            map: false
          },
            {
              name: 'hi',
              type: 'Point',
              id: 2,
              required: false,
              repeated: false,
              map: false
            }
          ]
        },
        Feature: {
          name: 'Feature',
          fields: [{
            name: 'name',
            type: 'string',
            id: 1,
            required: false,
            repeated: false,
            map: false,
            defaultValue: ''
          },
            {
              name: 'location',
              type: 'Point',
              id: 2,
              required: false,
              repeated: false,
              map: false
            }
          ]
        },
        RouteNote: {
          name: 'RouteNote',
          fields: [{
            name: 'location',
            type: 'Point',
            id: 1,
            required: false,
            repeated: false,
            map: false
          },
            {
              name: 'message',
              type: 'string',
              id: 2,
              required: false,
              repeated: false,
              map: false,
              defaultValue: ''
            }
          ]
        },
        RouteSummary: {
          name: 'RouteSummary',
          fields: [{
            name: 'point_count',
            type: 'int32',
            id: 1,
            required: false,
            repeated: false,
            map: false,
            defaultValue: 0
          },
            {
              name: 'feature_count',
              type: 'int32',
              id: 2,
              required: false,
              repeated: false,
              map: false,
              defaultValue: 0
            },
            {
              name: 'distance',
              type: 'int32',
              id: 3,
              required: false,
              repeated: false,
              map: false,
              defaultValue: 0
            },
            {
              name: 'elapsed_time',
              type: 'int32',
              id: 4,
              required: false,
              repeated: false,
              map: false,
              defaultValue: 0
            }
          ]
        }
      },
      services: {
        RouteGuide: {
          name: 'RouteGuide',
          package: 'routeguide',
          methods: [{
            name: 'GetFeature',
            requestStream: false,
            responseStream: false,
            requestName: 'Point',
            responseName: 'Feature'
          },
            {
              name: 'ListFeatures',
              requestStream: false,
              responseStream: true,
              requestName: 'Rectangle',
              responseName: 'Feature'
            },
            {
              name: 'RecordRoute',
              requestStream: true,
              responseStream: false,
              requestName: 'Point',
              responseName: 'RouteSummary'
            },
            {
              name: 'RouteChat',
              requestStream: true,
              responseStream: true,
              requestName: 'RouteNote',
              responseName: 'RouteNote'
            }
          ]
        }
      }
    }
  },
  options: {
    java_multiple_files: true,
    java_package: 'io.grpc.examples.routeguide',
    java_outer_classname: 'RouteGuideProto',
    objc_class_prefix: 'RTG'
  }
}

const expectedMethods = [{
  name: 'GetFeature',
  requestStream: false,
  responseStream: false,
  requestName: 'Point',
  responseName: 'Feature'
},
  {
    name: 'ListFeatures',
    requestStream: false,
    responseStream: true,
    requestName: 'Rectangle',
    responseName: 'Feature'
  },
  {
    name: 'RecordRoute',
    requestStream: true,
    responseStream: false,
    requestName: 'Point',
    responseName: 'RouteSummary'
  },
  {
    name: 'RouteChat',
    requestStream: true,
    responseStream: true,
    requestName: 'RouteNote',
    responseName: 'RouteNote'
  }
]

const expectedDescriptorPB6 = {
  namespaces: {
    routeguide: {
      name: 'routeguide',
      messages: {
        Point: {
          name: 'Point',
          fields: [{
            name: 'latitude',
            type: 'int32',
            id: 1,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }, {
            name: 'longitude',
            type: 'int32',
            id: 2,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }]
        },
        Rectangle: {
          name: 'Rectangle',
          fields: [{
            name: 'lo',
            type: 'Point',
            id: 1,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }, {
            name: 'hi',
            type: 'Point',
            id: 2,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }]
        },
        Feature: {
          name: 'Feature',
          fields: [{
            name: 'name',
            type: 'string',
            id: 1,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }, {
            name: 'location',
            type: 'Point',
            id: 2,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }]
        },
        RouteNote: {
          name: 'RouteNote',
          fields: [{
            name: 'location',
            type: 'Point',
            id: 1,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }, {
            name: 'message',
            type: 'string',
            id: 2,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }]
        },
        RouteSummary: {
          name: 'RouteSummary',
          fields: [{
            name: 'pointCount',
            type: 'int32',
            id: 1,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }, {
            name: 'featureCount',
            type: 'int32',
            id: 2,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }, {
            name: 'distance',
            type: 'int32',
            id: 3,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }, {
            name: 'elapsedTime',
            type: 'int32',
            id: 4,
            required: false,
            optional: true,
            repeated: false,
            map: false,
            long: false
          }]
        }
      },
      services: {
        RouteGuide: {
          name: 'RouteGuide',
          package: 'routeguide',
          methods: [{
            name: 'GetFeature',
            requestStream: false,
            responseStream: false,
            requestName: 'Point',
            responseName: 'Feature'
          }, {
            name: 'ListFeatures',
            requestStream: false,
            responseStream: true,
            requestName: 'Rectangle',
            responseName: 'Feature'
          }, {
            name: 'RecordRoute',
            requestStream: true,
            responseStream: false,
            requestName: 'Point',
            responseName: 'RouteSummary'
          }, {
            name: 'RouteChat',
            requestStream: true,
            responseStream: true,
            requestName: 'RouteNote',
            responseName: 'RouteNote'
          }]
        }
      }
    }
  },
  options: {
    java_multiple_files: true,
    java_package: 'io.grpc.examples.routeguide',
    java_outer_classname: 'RouteGuideProto',
    objc_class_prefix: 'RTG'
  }
}

exports.expectedDescriptor = expectedDescriptor
exports.expectedDescriptorPB6 = expectedDescriptorPB6
exports.expectedMethods = expectedMethods
