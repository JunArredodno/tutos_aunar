import * as React from 'react';
import ReactDOM from 'react-dom';
//importar el css como tsx
import './App.tsx';
/*importr los componentes de calendario*/
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject} from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';//Funciones de databinding

//Aca va el codigo fuente de toda la app/página
const App = () => {
	/* Metodo estandar para el dataBinding
	const [dataManager, setDataManager] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
		  const manager = new DataManager({
			url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
			adaptor: new ODataV4Adaptor()
		  });
		  await manager.ready;
		  setDataManager(manager);
		};
		fetchData();
	}, []);*/
	
	//Metodo más "estable-sencillo-ligero" de recibir datos externos (dataBinding)
	let dataManager= new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
        adaptor: new ODataV4Adaptor()
    });
	
  const data=[{
    id: 'Id',
    subject: { name: 'Name' },
    description: { name: 'descripcion' },
    startTime: { name: 'fecha1' },
    endTime: { name: 'fecha2' },
    IsAllDay:true,
    IsBlock:true
  }];
  const eventSettings = { includeFiltersInQuery: true, dataSource: dataManager, filds:data }
  return (<ScheduleComponent currentView='Month' selectedDate={new Date(2023, 6, 15)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
  </ScheduleComponent>);
};
export default App