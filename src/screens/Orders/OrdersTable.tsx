import {
  ChevronTableDownIcon,
  ChevronTableUpIcon,
  MoroHorizontalIcon,
} from 'components/Icons';
import React from 'react';
import {View, Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  OrderTableStyles,
  TableChexBoxStyles,
} from 'screens/Orders/OrdersStyles';
import {CheckBox} from '@rneui/themed';

interface Orders {
  id: number;
  code: number;
  firstName: string;
  lastName: string;
  stato: string;
}

interface OrdersTableProps {
  ordersData: Orders[];
  navigation: any;
}

const getButtonStyle = (permesso: string) => {
  switch (permesso) {
    case 'Shipped':
      return OrderTableStyles.shipped;
    case 'New':
      return OrderTableStyles.new;
    case 'Reso effettuato':
      return OrderTableStyles.reso;
    case 'Cancelled':
      return OrderTableStyles.cancelled;
    case 'In progress':
      return OrderTableStyles.progress;
    default:
      return {};
  }
};

const OrdersTable: React.FC<OrdersTableProps> = ({
  ordersData,
  navigation,
}: OrdersTableProps) => {
  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title style={OrderTableStyles.firstColumn}>
          <View style={OrderTableStyles.headCell}>
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'}
              size={22}
              containerStyle={TableChexBoxStyles.containerStyle}
            />
            <Text style={OrderTableStyles.headerText}>#</Text>
            <View style={OrderTableStyles.icons}>
              <ChevronTableUpIcon />
              <ChevronTableDownIcon />
            </View>
          </View>
        </DataTable.Title>
        <DataTable.Title numeric style={OrderTableStyles.secondColumn}>
          <View style={OrderTableStyles.headCell}>
            <Text style={OrderTableStyles.headerText}>Name</Text>
            <View style={OrderTableStyles.icons}>
              <ChevronTableUpIcon />
              <ChevronTableDownIcon />
            </View>
          </View>
        </DataTable.Title>
        <DataTable.Title numeric style={OrderTableStyles.thirdColumn}>
          <View style={OrderTableStyles.headCell}>
            <Text style={OrderTableStyles.headerText}>Stato</Text>
            <View style={OrderTableStyles.icons}>
              <ChevronTableUpIcon />
              <ChevronTableDownIcon />
            </View>
          </View>
        </DataTable.Title>
        <DataTable.Title numeric style={OrderTableStyles.FourthColumn}>
          {null}
        </DataTable.Title>
      </DataTable.Header>

      {ordersData.map(Order => (
        <DataTable.Row key={Order.id} style={OrderTableStyles.row}>
          <DataTable.Cell style={OrderTableStyles.firstColumn}>
            <DataTable.Cell>
              <View style={OrderTableStyles.code}>
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={'checkbox-blank-outline'}
                  size={22}
                  containerStyle={TableChexBoxStyles.containerStyle}
                />
                <Text style={OrderTableStyles.bodyText}>{Order.code}</Text>
              </View>
            </DataTable.Cell>
          </DataTable.Cell>
          <DataTable.Cell style={OrderTableStyles.secondColumn}>
            <View>
              <Text style={OrderTableStyles.bodyText}>{Order.firstName}</Text>
              <Text style={OrderTableStyles.bodyText}>{Order.lastName}</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell numeric style={OrderTableStyles.thirdColumn}>
            <TouchableOpacity
              style={getButtonStyle(Order.stato)}
              onPress={() => navigation.navigate('Order details')}>
              <Text style={OrderTableStyles.textButton}>{Order.stato}</Text>
            </TouchableOpacity>
          </DataTable.Cell>
          <DataTable.Cell numeric style={OrderTableStyles.FourthColumn}>
            <MoroHorizontalIcon width={17} />
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default OrdersTable;
