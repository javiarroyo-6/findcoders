import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  Button
} from 'react-native';



import { TagSelect } from 'react-native-tag-select';

export default class App extends Component { 
  render() {

    const data = [
      { id: 1, label: 'Python' },
      { id: 2, label: 'JavaScript' },
      { id: 3, label: 'C++' },
      { id: 4, label: 'Django' },
      { id: 5, label: 'Machine Learning' },
        { id: 6, label: 'R' },
        { id: 7, label: 'Deep Learning' },
        { id:8 , label: 'PyTorch' },
          { id:9 , label: 'TensorFlow' },
            { id: 10, label: 'fastai' },
              { id: 11, label: 'Keras' },
                { id: 12, label: 'MXNet' },
                  { id: 13, label: 'react' },
                    { id: 14, label: 'react-native' },
                      { id: 15, label: 'Blockchain-dev' },
                        { id:16 , label: 'Android' },
                          { id:17 , label: 'iOS' },
                            { id:18 , label: 'Database' },
                              { id:19 , label: 'AWS' },
                                { id:20 , label: 'GCP' },
                                { id:21 , label: 'Angular' },
                                  { id:22 , label: 'HTML' },
                                    { id:23 , label: 'Bootstrap' },
                                      { id:24 , label: 'GoLang' },
                                        { id:25 , label: 'Java' },
                                        { id:26 , label: 'AR/VR' },
                                          { id:27 , label: 'Fullstack' }
    ];



    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>Choose your skills: </Text>
            <TagSelect
            data={data}
            itemStyle={styles.item}
            itemLabelStyle={styles.label}
            itemStyleSelected={styles.itemSelected}
            itemLabelStyleSelected={styles.labelSelected}
            max={15}
            ref={(tag) => {
                this.tag = tag;
            }}
            onMaxError={() => {
                Alert.alert('Ops', 'Max reached');
            }}
            />
            <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
                <Button
                title="Get selected count"
                style={{color:'white'}}
                onPress={() => {
                    Alert.alert('Selected count', `Total: ${this.tag.totalSelected}`);
                }}
                />
            </View>
            <View>
                <Button
                style={{color:'white'}}
                title="Get selected"
                onPress={() => {
                    Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
                }}
                />
            </View>
            </View>
            <View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    marginTop: 50,
    marginLeft: 15,
  },
  buttonContainer: {
    padding: 15,
  },
  buttonInner: {
    marginBottom: 15,
  },
  labelText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 15,
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#FFF',
  },
  label: {
    color: '#333'
  },
  itemSelected: {
    backgroundColor: '#333',
  },
  labelSelected: {
    color: '#FFF',
  },
});
