export interface TeamMember {
       id: string;
       name: string;
       title: string;
       image: {
         formats: {
           thumbnail: {
             url: string;
           };
         };
       };
     }