function sumRange(num){
   if(num === 1) return 1; //basecase
   return num + sumRange(num-1);
}

sumRange(4)

                  
                                   
                                