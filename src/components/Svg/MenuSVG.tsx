interface OrdersSVGProps {
  color?: string; // Tailwind color class or hex color
}

const MenuSVG: React.FC<OrdersSVGProps> = ({ color = "#ffffff" }) => {
  return (
    <>
      <div className="w-6 h-6 flex justify-center ">
        <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5065 0.544632C11.8379 0.485123 12.1621 0.485123 12.4935 0.544632C12.8236 0.603922 13.0915 0.698694 13.6268 0.942022L22.2078 4.84247C22.7346 5.08193 22.9996 5.24601 23.2624 5.50218C23.5213 5.75454 23.7132 6.05255 23.8358 6.39267C23.9603 6.73792 24 7.04706 24 7.62574V17.9763C24 18.555 23.9603 18.8641 23.8358 19.2094C23.7132 19.5495 23.5213 19.8475 23.2624 20.0998C22.9996 20.356 22.7346 20.5201 22.2078 20.7596L13.438 24.7445C13.0236 24.9265 12.7823 25.0055 12.4935 25.0574C12.1621 25.1169 11.8379 25.1169 11.5065 25.0574C11.1764 24.9981 10.9085 24.9033 10.3732 24.66L1.79218 20.7596C1.26537 20.5201 1.00038 20.356 0.737576 20.0998C0.478681 19.8475 0.286789 19.5495 0.164181 19.2094C0.0397201 18.8641 0 18.555 0 17.9763L0.00194979 7.42077C0.0112541 6.96921 0.0552777 6.69477 0.164181 6.39267C0.286789 6.05255 0.478681 5.75454 0.737576 5.50218C1.00038 5.24601 1.26537 5.08193 1.79218 4.84247L10.562 0.857517C10.9764 0.675556 11.2177 0.596511 11.5065 0.544632ZM2 7.854L2.00043 18.0853C2.00217 18.2859 2.00933 18.3857 2.02438 18.4568L2.04566 18.5311C2.0656 18.5864 2.0915 18.6266 2.1336 18.6677C2.20439 18.7367 2.28535 18.7868 2.61979 18.9388L11 22.748L10.9999 11.9325C10.9859 11.9276 10.972 11.9225 10.9581 11.9174L10.7586 11.8352L2 7.854ZM22 7.853L13.2414 11.8352C13.1624 11.8711 13.0822 11.9034 13.0011 11.9321L13 22.748L21.3802 18.9388C21.5952 18.8411 21.7055 18.7855 21.7756 18.7399L21.8076 18.7178L21.8664 18.6677C21.9085 18.6266 21.9344 18.5864 21.9543 18.5311C21.9879 18.4381 22 18.3437 22 17.9763V7.853ZM6.5 4.899L3.416 6.301L11.5862 10.0145C11.8116 10.1169 12.0655 10.1315 12.299 10.0584L12.4138 10.0145L15.083 8.801L6.5 4.899ZM12.1399 2.51314C12.0424 2.49562 11.9576 2.49562 11.8601 2.51314C11.7243 2.53752 11.5979 2.58223 11.2008 2.76275L8.916 3.8L17.5 7.702L20.583 6.301L12.7992 2.76275C12.5344 2.6424 12.39 2.58241 12.2829 2.54857L12.2321 2.53367L12.1399 2.51314Z"
            fill={color}
          />
        </svg>
      </div>
    </>
  );
};

export default MenuSVG;
