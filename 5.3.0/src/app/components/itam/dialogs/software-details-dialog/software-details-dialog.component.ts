import { Component, OnInit, ViewChild, Inject, ViewEncapsulation, EventEmitter, Output, VERSION, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormControl } from '@angular/forms';
import { AssetService } from 'app/components/services/AssetService';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { JwtAuthService } from '../../../../shared/services/auth/jwt-auth.service';
import { DatePipe } from '@angular/common';
import { GroupService } from 'app/components/services/GroupService';
import { MatTableDataSource } from '@angular/material/table';

import { AllPathService } from 'app/components/services/AllPathServices';
import { ManagerService } from 'app/components/storage/sessionMangaer';
import { Constants } from 'app/components/storage/constants';
import { Subject } from 'rxjs';
import { ITAMService } from 'app/components/services/ITAMService';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-software-details-dialog',
  templateUrl: './software-details-dialog.component.html',
  styleUrls: ['./software-details-dialog.component.scss']
})
export class SoftwareDetailsDialogComponent implements OnInit {

  Headers: any ;
  message : any;

  public DetailsInfo: FormGroup;
  public LicenseAgreementInfo: FormGroup;
  public InstallationInfo: FormGroup;
  public LicenseInfo: FormGroup;
  public UsagesInfo: FormGroup;
  public HistoryInfo: FormGroup;
  public Download: FormGroup;
  public HardwareInfo : FormGroup;
  public selectedIndex;
  tabEnabled : boolean= false;
  geodisabled:boolean=true;
  mattab:boolean=true;
  public sampleform: FormGroup;

  submitted: boolean = false;
  get s1() {return this.DetailsInfo.controls; }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  datasource = new MatTableDataSource();
  datasourceL = new MatTableDataSource();
  datasourceI = new MatTableDataSource();
  datasourceLC = new MatTableDataSource();
  layerid: any;
  Layertext: string;
  IslayerDisplay: any;
  HeaderLayerText: string;
  groupId:any;
  UserId :any;
  regionId :any;
  companyId:any;

  public typeOfSoftwares: any[] = [];
  public typeOfCategorys: any[] = [];
  public typeOfManufacturers: any[] = [];
  public typeOfManufacturers1 : any[] = [];
  public typeOfSoftwareSuites: any[] = [];
  public softwareComponents :any[]=[];

  displayedColumns: string[] = ['Product', 'Cost', 'Version','Manufacturer','Category'];
  displayedColumnsL: string[] = ['Agreement Number', 'Manufacturer', 'Acquisition Date','Expiry Date','Expire in','PO #','Status'];
  displayedColumnsI : string[] = ['Workstation','Version','User','License Key','Product ID','Allocated License','Installed On'];
  displayedColumnsLC: string[] = ['License Name','License Type','License Option','Installations Allowed','Allocated','License Key','Status']

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SoftwareDetailsDialogComponent>,
    private fb: FormBuilder,
    private storage: ManagerService,
    public assetservice: AssetService,
    public loader: AppLoaderService,
    public datepipe: DatePipe,
    public groupservice: GroupService,
    public AllPath : AllPathService,
    private jwtAuth: JwtAuthService,
    public itamService : ITAMService,
    public as:AssetService,
    public toastr: ToastrService,) { 
      this.Headers = this.jwtAuth.getHeaders();
      this.message = this.jwtAuth.getResources();
    }

    softwareType :any;
    softwareid : any;
    complianceType : any;
    public disabledField: boolean = true;
    hideTab : boolean = true;
  ngOnInit() {
    this.tabEnabled = false;

    this.layerid = this.storage.get(Constants.SESSSION_STORAGE, Constants.LAYER_ID);
    this.groupId = this.storage.get(Constants.SESSSION_STORAGE, Constants.GROUP_ID);
    this.regionId = this.storage.get(Constants.SESSSION_STORAGE, Constants.REGION_ID);
    this.companyId = this.storage.get(Constants.SESSSION_STORAGE, Constants.COMPANY_ID);
    this.UserId = this.storage.get(Constants.SESSSION_STORAGE, Constants.USER_ID);
    
    this.IslayerDisplay = this.layerid;
    if (this.layerid == 1) {
      this.Layertext = "Country";
    }
    else if (this.layerid == 2) {
      this.Layertext = "State";
    }
    else if (this.layerid == 3) {
      this.Layertext = "City";
    }
    else if (this.layerid == 4) {
      this.Layertext = "Zone";
    }

     
    this.HeaderLayerText = this.Layertext;
    this.softwareid = this.data.payload.softwareid;
    this.softwareType = this.data.payload.Type;
    this.complianceType = !!this.data.payload.ComplianceType ? this.data.payload.ComplianceType : 'NA';
    this.GetSoftwareDetails();
    this.getsoftwareTypes();
    this.getSoftwareCategory();
    this.getSoftwareManufacturers();
    //this.getRoleList();
  }

  
  nextStep(i) {
    this.selectedIndex = i;   
  }
  previousStep(i) {
    this.selectedIndex = i;    
  }
  bindData: any[] = [];
  ColumnValue:any[]=[];
  GetSoftwareDetails() {
     
    var data = {
      Softwareid : this.softwareid,
      CompanyId : this.companyId,
      GroupID : this.groupId
    }
    this.loader.open();
    this.itamService.getSoftwareDetails(data).subscribe(r => {
       
      this.loader.close();
      this.tabEnabled = true;
      this.bindData = r;
      console.log(this.bindData);
      this.buildItemForm(this.bindData[0]);

    })
  }  

  ListOfField: any[] = [];
  displayedColumns1: any[] = [];
  mandatoryFields: any[] = [];
 

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
         
    this.nextStep(tabChangeEvent.index);
    this.previousStep(tabChangeEvent.index); 
    
  }

  ChangeType(type){
    
    if(type.SoftwareTypeName == 'Managed'){
      this.DetailsInfo.get('SoftwareSuite').setValidators([Validators.required]);
      this.DetailsInfo.get('SoftwareSuite').updateValueAndValidity();

      //this.DetailsInfo.get('Role').setValidators([Validators.required]);
      //this.DetailsInfo.get('Role').updateValueAndValidity();
    }
    else{
      this.DetailsInfo.get('SoftwareSuite').clearValidators();
      this.DetailsInfo.get('SoftwareSuite').updateValueAndValidity();

      //this.DetailsInfo.get('Role').clearValidators();
      //this.DetailsInfo.get('Role').updateValueAndValidity();
    }
  }
  
  
  buildItemForm(item) {
     debugger;
    this.tabEnabled = true;
    this.DetailsInfo = this.fb.group({
      SoftwareName : [item.SoftwareName , [Validators.required,this.noWhitespaceValidator]],
      Version : [item.SoftwareVersion],
      Manufacturer : [item.ManufacturerID , [Validators.required]],
      ManufacturerFilter:[''],
      SoftwareCategory : [item.SoftwareCategoryID , [Validators.required]],
      SoftwareCategoryFilter : [''],
      SoftwareType : [item.SoftwareTypeId, [Validators.required]],      
      SoftwareTypeFilter : [''],
      SoftwareSuite:[item.SoftwareSuiteID],
      SoftwareSuiteFilter : [''],
      Role:[''],
      RoleFilter : [''],
    })
    this.LicenseAgreementInfo = this.fb.group({
     
    })
    this.InstallationInfo = this.fb.group({
     
    })
    this.LicenseInfo = this.fb.group({
     
    })
    this.UsagesInfo = this.fb.group({
      
    })
    this.HistoryInfo = this.fb.group({
      
    })
    
    //======== Get Document List ======
    
    // this.groupservice.GetEditAssetUploadDocument(item.PreFarId)
    //   .subscribe(r => {      
    //     const Data = JSON.parse(r);
    //     console.log("Document", Data);
    //     this.onChangeDataSource(Data)
    //   });
    this.getSuiteComponentSoftware(item.ManufacturerID);
    this.getSoftwareInstallationdetails();
    
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
  

  getsoftwareTypes(){     
    var Isoptions =  1 ; 
    this.itamService.getSoftwareType(Isoptions).subscribe((res: any)=>{       
      this.typeOfSoftwares = res;
      console.log(res);
    });
  }

  getSoftwareCategory(){     
    this.itamService.getSoftwareCategory().subscribe((res: any)=>{       
      this.typeOfCategorys = res;
      console.log(res)
    });
  }

  getSoftwareManufacturers(){     
    this.itamService.getSoftwareManufacturer().subscribe((res: any)=>{       
      this.typeOfManufacturers = res;
      this.typeOfManufacturers1 = res;
      console.log(res);
    });
  }
  roleList : any[]=[];
  getRoleList(){     
    this.itamService.getRoleList().subscribe((res: any)=>{       
      this.roleList = res;
      console.log(res);
    });
  }

  applyManufactureFilter() {
     
    let search = this.DetailsInfo.controls['ManufacturerFilter'].value;
    if (!search) {
      this.typeOfManufacturers = this.typeOfManufacturers1;
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the s
    this.typeOfManufacturers = this.typeOfManufacturers1.filter(col => col.Name.toLowerCase().indexOf(search) > -1);

  }

  getSoftwareSuite(mid){     
    var optionId = 0;
    this.itamService.getSoftwareSuite(optionId , mid).subscribe((res: any)=>{       
      this.typeOfSoftwareSuites = res;
      console.log(res);
    });
  }

  getSuiteComponentSoftware(mID){
    this.itamService.getSuiteComponentSoftware(mID).subscribe((res: any)=>{
      this.softwareComponents = res;
      console.log(res);
    });
    this.getSoftwareSuite(mID);
  }

  getSoftwareInstallationdetails() {
     debugger;
    var data = {
      option : 0,
      SoftwareId : this.softwareid,
      CompanyId : this.companyId,
      GroupID : this.groupId
    }
    //this.loader.open();
    this.itamService.getSoftwareInstallationdetails(data).subscribe(r => {
       
      var result = r;
      console.log(result);
      this.onChangeDataSourceI(result);

    })
  }
  

  onChangeDataSource(value) {
    this.datasource = new MatTableDataSource(value);
  }

  onChangeDataSourceL(value) {
    value  = [{'Agreement Number': '66', 'Manufacturer': 'Adobe', 'Acquisition Date': 'Mar 16, 2022','Expiry Date': 'Mar 27, 2022','Expire in':'3 days ago','PO #': 'r44','Status': 'Expired'}];
    this.datasourceL = new MatTableDataSource(value);
    this.datasourceL.sort = this.sort;
    this.datasourceL.paginator = this.paginator;
  }

  onChangeDataSourceI(value) {
    //value  = [{'Workstation':'desktop-9pdea2e','Version':'','User':'','License Key':'','Product ID':'','Allocated License':'','Installed On':''}];
    this.datasourceI = new MatTableDataSource(value);
    this.datasourceI.sort = this.sort;
    this.datasourceI.paginator = this.paginator;
  } 
   onChangeDataSourceLC(value) {
    value  = [];
    this.datasourceLC = new MatTableDataSource(value);
    this.datasourceLC.sort = this.sort;
    this.datasourceLC.paginator = this.paginator;
  }

  onclosetab() {
    this.dialogRef.close(false);

  }

  updateDetails(){
    debugger;
    let data = {
      id : this.softwareid,
      SoftwareName: this.DetailsInfo.value.SoftwareName,
      SoftwareVersion : !!this.DetailsInfo.value.Version ? this.DetailsInfo.value.Version : "",
      SoftwareTypeID: this.DetailsInfo.value.SoftwareType,
      SoftwareCategoryID: this.DetailsInfo.value.SoftwareCategory,
      ManufacturerID: this.DetailsInfo.value.Manufacturer,
      
      Description: !!this.bindData[0].Description ? this.bindData[0].Description : "",
      CompanyId: this.companyId,
      GroupId: this.groupId,
      SoftwareSuiteID :!!this.DetailsInfo.value.SoftwareSuite ? this.DetailsInfo.value.SoftwareSuite : 0,
      //RoleID : !!this.DetailsInfo.value.Role ? this.DetailsInfo.value.Role : 0,
    }
    
    this.itamService.updatesoftware(data).subscribe(success=>{
      debugger;
      console.log(success);
      this.toastr.success("Software Details Updated Successfully.", this.message.AssetrakSays);
      this.dialogRef.close(true);
    })
  } 

}
