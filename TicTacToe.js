        var i1=0 ,i2=0  ;    
        var wc =[
            ["0","1","2"],["0","2","1"],["1","0","2"],["1","2","0"],["2","0","1"],["2","1","0"],["3","4","5"],["3","5","4"],["5","3","4"],["5","4","3"],["4","5","3"],["4","3","5"],["6","7","8"],["6","8","7"],["7","6","8"],["7","8","6"],["8","7","6"],["8","6","7"],["0","3","6"],["0","6","3"],["3","0","6"],["3","6","0"],["6","0","3"],["6","3","0"],["1","4","7"],["1","7","4"],["4","1","7"],["4","7","1"],["7","4","1"],["7","1","4"],["2","5","8"],["2","8","5"],["5","2","8"],["5","8","2"],["8","5","2"],["8","2","5"],["0","4","8"],["0","8","4"],["4","0","8"],["4","8","0"],["8","4","0"],["8","0","4"],["2","4","6"],["2","6","4"],["4","2","6"],["4","6","2"],["6","4","2"],["6","2","4"],
            ] ;
        var player1 =["x","x","x","x","x"] ;   
        var player2 =["x","x","x","x"] 
        var checker =["x","x","x"] ;
        var checker1=["x","x","x"] ;    
        var c=0 ;
            
    // verification -------------------------------------------        
            
            function checking (player,a) {
                for (j=0 ; j<wc.length ; j++) {
                    for (k=0 ; k<a.length ; k++) {
                        
                         if (wc[j][k]==a[k]) {
                         c++ ;
                         }else {
                             k=a.length ;c=0 ;
                         }
                     }
                    if (c==3) {
                        if (player=="yellow") {
                        alert("Yellow player won !") ; 
                        j=wc.length ; 
                            for(t=0 ;t<9;t++){
                            document.getElementById(t.toString()).style.pointerEvents ="none" ;  
                            }
                        }else {
                          alert("Blue player won !") ;
                          j=wc.length ;  
                            for(t=0 ;t<9;t++){
                            document.getElementById(t.toString()).style.pointerEvents ="none" ;  
                            }
                        }     
                    }
                }
            }   

    //palyer 1 Blue --------------------------------------------        
    
        function ply1(position) {    
            player1[i1]=position ;
            i1++ ;
        if  (i1==3){
         for (f=0 ; f<3 ; f++) {
            checker1[f]=player1[f] ;
            }
             checking("blue",checker1) ;
            }else if (i1==4) {
               let m=0 ;
               for (l=0 ; l<4 ; l++) {
                if (l==1) {
                    l++ ;
                }else {   
                  checker1[m]=player1[l] ;
                    m++ ;
                }
            }
            console.log("Checker 1 | 1/2 : "+checker1) ;    
            checking("blue",checker1) ;
            let x= checker1[1];
            checker1[1]=checker1[2];
            checker1[2]=x ;                
            checker1[1]=player1[1] ;
            console.log("2/1 Checker1 :"+checker1) ;    
            checking("blue",checker1) ;
            checker1[0]=checker1[1];
            checker1[1]=player1[2];    
            checking("blue",checker1) ;                
            }else if (i1==5){
            checker1 = [player1[0],player1[1],player1[4]];
            checking("blue",checker1) ;  
            checker1 = [player1[1],player1[2],player1[4]];
            checking("blue",checker1) ; 
            checker1 = [player1[2],player1[3],player1[4]];
            checking("blue",checker1) ;    
            checker1 = [player1[0],player1[2],player1[4]];
            checking("blue",checker1) ;    
            checker1 = [player1[0],player1[3],player1[4]];
            checking("blue",checker1) ;    
            checker1 = [player1[1],player1[3],player1[4]];
            checking("blue",checker1) ;    
            }
            console.log(player1) ;
        }
        
    //palyer 2 Yellw -------------------------------------------
            
        function ply2(position) {    
        player2[i2]=position ;    
           i2++ ;
        if  (i2==3){
         for (f=0 ; f<3 ; f++) {
            checker[f]=player2[f] ;
            }
             checking("yellow",checker) ;
            }else if (i2==4) {
                let n=0 ;
               for (k=0 ; k<4 ; k++) {
                if (k==1) {
                    k++ ;
                }else {   
                  checker[n]=player2[k] ;
                    n++ ;
                }
            }
            console.log("Player2 :"+player2) ;  
            let x= checker[1];
            checker[1]=checker[2];
            checker[2]=x ;
            console.log("1/2 Checker :"+checker) ;    
            checking ("yellow",checker) ;
            checker[1]=player2[1] ;
            console.log("2/1 Checker :"+checker) ;    
            checking("yellow",checker) ;
            checker[0]=checker[1];
            checker[1]=player2[2];    
            checking("yellow",checker) ;    
            }            
          console.log(player2) ;
        }
        
    // ckecking the boxs ----------------------------------------
            
        var count =0  ;            
        function check (id) {
            if (count % 2 == 0 ) {
            document.getElementById(id).innerHTML ="X" ;
            document.getElementById(id).style.color ="blue" ; 
            document.getElementById(id).style.pointerEvents ="none" ;    
            count++ ;
            ply1(id) ;
            }else {
            document.getElementById(id).innerHTML ="O" ;
            document.getElementById(id).style.color ="yellow" ;
            document.getElementById(id).style.pointerEvents ="none" ;   
            count++ ;
            ply2(id) ;
            }
        }