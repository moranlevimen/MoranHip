
import React, { Component } from 'react';
import { Card ,Thumbnail,CardItem,Text} from 'native-base';



    class PaymentHistory extends React.Component {
       
    
        constructor(props) {
            super(props);
            this.state = {
            };
        }
    
        render(){
            const { transaction_time, amount } = this.props.payments;
            console.log(this)
    
            return (
           
                <Card style={styles.cardStyle}>
                    <Thumbnail source={{ uri: image.medium }} style={{ height: 350, width: '100%', flex: 1, resizeMode: 'stretch' }} />
                    <CardItem cardBody >
                        <Content>
                            <Text>{transaction_time ? transaction_time : ''}</Text>
                            <Text>{amount ? amount : ''}</Text>
                            
                                <Text>click here for more details</Text>
                           
                        </Content>
                    </CardItem>
       
                </Card>
            
            );
        }
    }
    
    
    
    const styles = {
        headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        headerTextStyle: {
            fontSize: 18
        },
        thumbnailStyle: {
            height: 50,
            width: 50
        },
        thumbnailContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        },
    
        cardStyle: {
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            marginTop: 10,
        },
        // conatinerStyle: {
        //     flex: 0.9
        // },
        // footerContainer: {
        //     flex: 0.07,
        //     backgroundColor: "#4050b5",
        //     justifyContent: "center",
        //     alignItems: 'center'
        // },
    };
    
    export default PaymentHistory;