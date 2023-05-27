/*! For license information please see createFrustumOutlineGeometry.js.LICENSE.txt */
define(["./defaultValue-65031fc5","./Transforms-a48d25e5","./Matrix2-c339372d","./ComponentDatatype-1b227f17","./FrustumGeometry-2e9d96d4","./GeometryAttribute-5db26912","./GeometryAttributes-f9b563d6","./combine-96aed74b","./RuntimeError-23f4777c","./WebGLConstants-f5c279b9","./Plane-3d182a08","./VertexFormat-2b3ad79f"],(function(e,t,r,n,a,u,i,o,s,c,p,m){"use strict";function d(n){const u=n.frustum,i=n.orientation,o=n.origin,s=e.defaultValue(n._drawNearPlane,!0);let c,p;u instanceof a.PerspectiveFrustum?(c=0,p=a.PerspectiveFrustum.packedLength):u instanceof a.OrthographicFrustum&&(c=1,p=a.OrthographicFrustum.packedLength),this._frustumType=c,this._frustum=u.clone(),this._origin=r.Cartesian3.clone(o),this._orientation=t.Quaternion.clone(i),this._drawNearPlane=s,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+r.Cartesian3.packedLength+t.Quaternion.packedLength}d.pack=function(n,u,i){i=e.defaultValue(i,0);const o=n._frustumType,s=n._frustum;return u[i++]=o,0===o?(a.PerspectiveFrustum.pack(s,u,i),i+=a.PerspectiveFrustum.packedLength):(a.OrthographicFrustum.pack(s,u,i),i+=a.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,u,i),i+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,u,i),u[i+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,u};const f=new a.PerspectiveFrustum,h=new a.OrthographicFrustum,g=new t.Quaternion,l=new r.Cartesian3;return d.unpack=function(n,u,i){u=e.defaultValue(u,0);const o=n[u++];let s;0===o?(s=a.PerspectiveFrustum.unpack(n,u,f),u+=a.PerspectiveFrustum.packedLength):(s=a.OrthographicFrustum.unpack(n,u,h),u+=a.OrthographicFrustum.packedLength);const c=r.Cartesian3.unpack(n,u,l);u+=r.Cartesian3.packedLength;const p=t.Quaternion.unpack(n,u,g),m=1===n[u+=t.Quaternion.packedLength];if(!e.defined(i))return new d({frustum:s,origin:c,orientation:p,_drawNearPlane:m});const _=o===i._frustumType?i._frustum:void 0;return i._frustum=s.clone(_),i._frustumType=o,i._origin=r.Cartesian3.clone(c,i._origin),i._orientation=t.Quaternion.clone(p,i._orientation),i._drawNearPlane=m,i},d.createGeometry=function(e){const r=e._frustumType,o=e._frustum,s=e._origin,c=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);a.FrustumGeometry._computeNearFarPlanes(s,c,r,o,m);const d=new i.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let f,h;const g=p?2:1,l=new Uint16Array(8*(g+1));let _=p?0:1;for(;_<2;++_)f=p?8*_:0,h=4*_,l[f]=h,l[f+1]=h+1,l[f+2]=h+1,l[f+3]=h+2,l[f+4]=h+2,l[f+5]=h+3,l[f+6]=h+3,l[f+7]=h;for(_=0;_<2;++_)f=8*(g+_),h=4*_,l[f]=h,l[f+1]=h+4,l[f+2]=h+1,l[f+3]=h+5,l[f+4]=h+2,l[f+5]=h+6,l[f+6]=h+3,l[f+7]=h+7;return new u.Geometry({attributes:d,indices:l,primitiveType:u.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=d.unpack(t,r)),d.createGeometry(t)}}));