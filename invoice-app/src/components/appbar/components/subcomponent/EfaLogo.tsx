import * as React from 'react';
import AspectRatio, { AspectRatioProps } from '@mui/joy/AspectRatio';

export default function EfaLogo({ sx, ...props }: AspectRatioProps) {
  return (


    <AspectRatio // objectFit="contain"
      ratio="49/13"
      variant="plain"
      {...props}
      sx={[
        {
          width: '120px',
          borderRadius: 'sm',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>
        
          <img
            // src="../../../../../public/access/img/efemtid_dark_200px.png"
            src="https://efremtid.no/wp-content/uploads/2021/02/efemtid_dark_200px.png"
            // srcSet="https://https://efremtid.no/wp-content/uploads/2021/02/efemtid_dark_200px.png"
            alt="efremtid.no"
            /> 
         
          
      </div>
    </AspectRatio>
        
  );
}
