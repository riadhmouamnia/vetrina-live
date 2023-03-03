import {Text, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {ArowRight, EyeIcon} from 'components/Icons';
import {visitorsCard} from 'data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {BasicCardStyles} from 'styles/global';
import {VisitorsCardStyles} from 'screens/Dashboard/styles/DashboardStyles';

export default function VisitorsCard() {
  const [selected, setSelected] = React.useState('');
  return (
    <CardContainer>
      <View style={BasicCardStyles.header}>
        <View style={BasicCardStyles.left}>
          <EyeIcon />
          <Text style={BasicCardStyles.title}>{visitorsCard.title}</Text>
        </View>
        <View style={BasicCardStyles.right}>
          <SelectList
            boxStyles={VisitorsCardStyles.boxStyle}
            inputStyles={VisitorsCardStyles.input}
            fontFamily="SourceSansPro-Regular"
            setSelected={(val: any) => setSelected(val)}
            data={visitorsCard.duration}
            save="value"
            defaultOption={{key: 1, value: 'This month'}}
          />
        </View>
      </View>
      <View>
        <Text style={VisitorsCardStyles.total}>{visitorsCard.total}</Text>
      </View>
      <TouchableOpacity style={BasicCardStyles.linkContainer}>
        <Text style={BasicCardStyles.link}>{visitorsCard.link}</Text>
        <ArowRight />
      </TouchableOpacity>
    </CardContainer>
  );
}
