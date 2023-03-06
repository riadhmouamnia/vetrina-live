import {Text, View} from 'react-native';
import React from 'react';
import {infoOrdersTabsStyles, tabsStyle} from 'screens/Orders/OrdersStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  DetailsChevronDown,
  ShippingInfoIcon,
  TelegramIcon,
  WhatsAppIcon,
} from 'components/Icons';
import color from 'theme/color';

export default function InfoOrders() {
  return (
    <View>
      <View style={infoOrdersTabsStyles.header}>
        <Text style={infoOrdersTabsStyles.date}>29/05/2020 18:54</Text>
      </View>
      <Text style={infoOrdersTabsStyles.title}>Cliente</Text>
      <Text style={infoOrdersTabsStyles.body}>Mario Rossi</Text>
      <TouchableOpacity>
        <Text style={infoOrdersTabsStyles.link}>mariorossi@vetrinalive.it</Text>
      </TouchableOpacity>
      <View style={infoOrdersTabsStyles.contact}>
        <Text style={infoOrdersTabsStyles.body}>Telefono: </Text>
        <TouchableOpacity>
          <Text style={infoOrdersTabsStyles.link}>+39 3333232331</Text>
        </TouchableOpacity>
      </View>
      <Text style={infoOrdersTabsStyles.body}>
        Codice Fiscale: RSSMAR22T33M123K
      </Text>
      <View style={infoOrdersTabsStyles.contact}>
        <WhatsAppIcon />
        <Text style={infoOrdersTabsStyles.whatsApp}>Contatta su Whatsapp</Text>
      </View>
      <View style={infoOrdersTabsStyles.contact}>
        <TelegramIcon />
        <Text style={infoOrdersTabsStyles.telegram}>Contatta su Telegram</Text>
      </View>
      <View style={infoOrdersTabsStyles.devider} />
      <Text style={infoOrdersTabsStyles.title}>Shipping Address</Text>
      <Text style={infoOrdersTabsStyles.body}>
        Via Roma, 59, Torre del Greco, NA, 80059
      </Text>
      <View style={{...tabsStyle.devider, marginVertical: 20}} />
      <Text style={infoOrdersTabsStyles.title}>Shipping Info</Text>
      <Text style={infoOrdersTabsStyles.body}>Nome corriere: Fedex</Text>
      <Text style={infoOrdersTabsStyles.body}>
        Numero/Link ordine: FR12342123 2314
      </Text>
      <TouchableOpacity style={infoOrdersTabsStyles.shippingDropDown}>
        <ShippingInfoIcon />
        <Text style={infoOrdersTabsStyles.shippingText}>
          Spedizione Corriere
        </Text>
        <DetailsChevronDown width={20} fill={color.primaryBlack} />
      </TouchableOpacity>
      <Text style={infoOrdersTabsStyles.description}>
        Se cambi la modalità e i costi di consegna, ricordati di comunicarlo al
        cliente.
      </Text>
      <View style={infoOrdersTabsStyles.footer}>
        <View style={infoOrdersTabsStyles.checkout}>
          <Text style={infoOrdersTabsStyles.checkouttext}>Subtotal</Text>
          <Text style={infoOrdersTabsStyles.checkouttext}>€ 47,00</Text>
        </View>
        <View style={infoOrdersTabsStyles.checkout}>
          <Text style={infoOrdersTabsStyles.checkouttext}>
            Courier Shipping
          </Text>
          <View style={infoOrdersTabsStyles.courierShipping}>
            <Text style={infoOrdersTabsStyles.checkouttext}>€ 2,00</Text>
            <DetailsChevronDown
              width={20}
              fill={color.primaryBlack}
              style={{marginLeft: 10}}
            />
          </View>
        </View>
        <View style={infoOrdersTabsStyles.checkout}>
          <Text style={infoOrdersTabsStyles.total}>Total</Text>
          <Text style={infoOrdersTabsStyles.total}>€ 49,00</Text>
        </View>
        <TouchableOpacity style={tabsStyle.button}>
          <Text style={tabsStyle.buttonText}>Shipped</Text>
          <DetailsChevronDown fill="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
