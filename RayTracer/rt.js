document.addEventListener("DOMContentLoaded", (event) => {
  function sqr(num) {
    return Math.pow(num, 2);
  }

  class Vec3 {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    add(v) {
      return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    subtract(v) {
      return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    scale(scalar) {
      return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize() {
      const mag = this.magnitude();
      if (mag === 0) {
        throw new Error("Cannot normalize a zero vector");
      }
      return this.scale(1 / mag);
    }

    cross(v) {
      // obtained by calculating determinant with i,j,k, this and v
      return new Vec3(
        this.y * v.z - this.z * v.y,
        this.z * v.x - this.x * v.z,
        this.x * v.y - this.y * v.x
      );
    }

    isEqual(v){
        return this.x==v.x && this.y==v.y && this.z==v.z;
    }
  }

  class Vec2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    add(v) {
      return new Vec2(this.x + v.x, this.y + v.y);
    }

    subtract(v) {
      return new Vec2(this.x - v.x, this.y - v.y);
    }

    scale(scalar) {
      return new Vec2(this.x * scalar, this.y * scalar);
    }

    dot(v) {
      return this.x * v.x + this.y * v.y ;
    }

    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y );
    }

    normalize() {
      const mag = this.magnitude();
      if (mag === 0) {
        throw new Error("Cannot normalize a zero vector");
      }
      return this.scale(1 / mag);
    }

    cross(v) {
      // obtained by calculating determinant with i,j,k, this and v
      return this.x * v.y - this.y * v.x;
      
    }

    isEqual(v){
        return this.x==v.x && this.y==v.y;
    }
  }

  let v1 = new Vec3(1,2,3);
  let v2 = new Vec3(1,2,3);
  console.log(v1.isEqual(v2));


});
