import {MoroHorizontalIcon} from 'components/Icons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DataTable, Avatar} from 'react-native-paper';
import {TableStyles} from 'screens/Products/ProductsStyles';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({products}) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title style={TableStyles.firstColumn}>
          Product name
        </DataTable.Title>
        <DataTable.Title numeric style={TableStyles.middleColumn}>
          Price
        </DataTable.Title>
        <DataTable.Title numeric style={TableStyles.lastColumn}>
          <MoroHorizontalIcon />
        </DataTable.Title>
      </DataTable.Header>

      {products.map(product => (
        <DataTable.Row key={product.id} style={TableStyles.row}>
          <DataTable.Cell style={TableStyles.firstColumn}>
            <View style={TableStyles.avatarContainer}>
              <Avatar.Image
                size={32}
                source={require('../../assets/images/t-shirt.png')}
                style={TableStyles.avatar}
              />
              <DataTable.Cell>{product.name}</DataTable.Cell>
            </View>
          </DataTable.Cell>
          <DataTable.Cell numeric style={TableStyles.middleColumn}>
            €{product.price.toFixed(2)}
          </DataTable.Cell>
          <DataTable.Cell numeric style={TableStyles.lastColumn}>
            <MoroHorizontalIcon />
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default ProductTable;
