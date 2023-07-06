// 获取数组的交集，返回一个数组
export const getIntersection = function (...arr) {
  const res = [], dict = new Map();
  for(const item of arr){
    if(!Array.isArray(item)){
      throw new Error("请输入数组")
    }else{
      for(const a of item){
        let num = dict.get(a) || 0;
        dict.set(a,++num)
      }
    }
  }
  const n = arr.length;
  dict.forEach((val,key)=>{
    if(val === n){
      res.push(key)
    }
  })
  return res;
}