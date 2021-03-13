import React, { Component } from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';;
import Icon from 'react-native-vector-icons/AntDesign';

//Styles
import Styles from "../assets/styles";

//Services
import API from '../services/api';

//Screen
import LoadingScreen from '../screens/loading';


const taskStyle = {
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 4,
    borderLeftWidth: 12,
    backgroundColor: 'white',
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
};


const titleStyle = {
    color: '#6C6C6C',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '600'
};


const titleTypeTask = {
    color: '#6C6C6C',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16
}


const EnumStatus = {
    pendent: "pendente",
    doing: "fazendo",
    done: "concluído"
};


function formatDate(date){
    if (date !== null) {
        let day = date.split(" ")[0].split("-");
        let time = date.split(" ")[1].split(":");

        this.getDate = day[2]+"/"+day[1]+"/"+day[0];
        this.getTime = time[0]+":"+time[1];
    
    } else {
        this.getDate = 'Indefinido';
        this.getTime = 'Indefinido';
    }
}


function TaskCard (props){
    let color = '#000';
    switch (props.status) {
        case EnumStatus.pendent:
            color = '#FF0000';
            break;
        case EnumStatus.doing:
            color = '#FFA500'; 
            break;
        case EnumStatus.done:
            color = '#228B22'; 
            break;
    }
    
    const format = new formatDate(props.date);

    return (
        <View style={[taskStyle, Styles.shadow, { borderLeftColor: color } ]}>
            <View>
                <Text style={ titleStyle } numberOfLines={1}>{ props.title }</Text>
                <Text style={{ color: '#A0A0A0' }}>{ format.getDate }</Text>
                <Text style={{ color: color }}>{ props.status } </Text>
            </View>

            <TouchableOpacity style={ Styles.shadow }>
                <Icon name='rightcircle' size={32} color='#ACACAC'/>
            </TouchableOpacity>
        </View>
    );
}


class ListTasks extends Component {
    constructor(props){
        super(props);
        this.state = { tasks: <LoadingScreen /> };
        this.api = new API();
    }

    mountTasks (argTasks) {        
        if (typeof argTasks === 'undefined')
            this.setState({ tasks: <Text>Error desconhecido no servidor</Text> });

        else if (argTasks !== null) {
            let listPendent = [];
            let listDoing = [];
            let listDone = [];

            let myTask = null;

            argTasks.forEach( (element, index) => {
                myTask = ( 
                    <TaskCard 
                        key={ `${element.name} - ${index}` } 
                        title={ element.name } 
                        text={ element.details } 
                        status={ element.status } 
                        date={ element.created_at }
                    />
                );

                switch (element.status) {
                    case EnumStatus.pendent:
                        listPendent.push(myTask);                        
                        break;
                    case EnumStatus.doing:
                        listDoing.push(myTask);
                        break;
                    case EnumStatus.done:
                        listDone.push(myTask);
                        break;
                    default:
                        break;         
                }
            });         

            this.setState({
                tasks: (
                    <ScrollView>
                        <View style={{ paddingBottom: 8 }}>
                            <Text style={ titleTypeTask }>Pendentes</Text>
                            { listPendent }
                            <Text style={ titleTypeTask }>Fazendo</Text>
                            { listDoing }
                            <Text style={ titleTypeTask }>Concluídas</Text>
                            { listDone }
                        </View>
                    </ScrollView>
                ) 
            });
        } 
        else 
            this.setState({ tasks: <Text>Nenhuma tarefa cadastrada</Text> });
    }


    getTasks () {
        this.api
        .getTasksUser()
        .then( 
            (argTasks) => { 
                this.mountTasks(argTasks); 
            }
        )
        .catch( 
            (error) => {
                console.log(error)
            }
        );
    }


    componentDidMount(){
        this.getTasks();
    }


    render() {
        return this.state.tasks;
    }
}

export default ListTasks;