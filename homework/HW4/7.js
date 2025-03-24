class Vector {
    constructor(components) {
      this.components = components;
    }
  
    // 向量加法
    add(other) {
      if (this.components.length !== other.components.length) {
        throw new Error("Vectors must have the same dimension.");
      }
      const result = this.components.map((value, index) => value + other.components[index]);
      return new Vector(result);
    }
  
    // 向量減法
    sub(other) {
      if (this.components.length !== other.components.length) {
        throw new Error("Vectors must have the same dimension.");
      }
      const result = this.components.map((value, index) => value - other.components[index]);
      return new Vector(result);
    }
  
    // 向量內積
    dot(other) {
      if (this.components.length !== other.components.length) {
        throw new Error("Vectors must have the same dimension.");
      }
      const result = this.components.reduce((sum, value, index) => sum + value * other.components[index], 0);
      return result;
    }
  }
  
  // 測試
  let a = new Vector([1, 2, 3]);
  let b = new Vector([4, 5, 6]);
  
  console.log(a.add(b).sub(b).dot(b));