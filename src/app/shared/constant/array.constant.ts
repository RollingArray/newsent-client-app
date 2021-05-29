import { StringKey } from 'src/app/shared/constant/string.constant';
import { RouteModel } from '../model/route.model';

export class ArrayKey {
  public static readonly APP_PRIMARY_ROUTE_PAGES : RouteModel[] = [
    {
        title: 'Community',
        children: [
          {
            title: 'My Community',
            url: '/go/my-feed',
            icon: StringKey.ICON_COMMUNITY
          },
          {
            title: 'Search Community',
            url: '/go/search-community',
            icon: StringKey.ICON_SEARCH
          },
          {
            title: 'Community Administration',
            url: '/go/community-administration',
            icon: StringKey.ICON_ADMIN
          },
          {
            title: 'My Order To Supplier',
            url: '/go/my-order-to-supplier',
            icon: StringKey.ICON_DELIVERY
          },
        
        ]
    },
    {
      title: 'Supplier',
      children: [
        {
          title: 'I am a supplier',
          url: '/go/my-supplier',
          icon: StringKey.ICON_SUPPLIER
        },
        {
          title: 'Supplier Administration',
          url: '/go/supplier-administration',
          icon: StringKey.ICON_ADMIN
        },
        {
          title: 'My Order From Community',
          url: '/go/my-order-from-community',
          icon: StringKey.ICON_ORDER
        },
      ]
  }
];
}
