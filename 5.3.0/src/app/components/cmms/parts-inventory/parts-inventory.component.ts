import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ReplaySubject, Subject, Observable, forkJoin } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { AssetTransferDialogComponent } from 'app/components/transfer/dialog/asset-transfer-dialog/asset-transfer-dialog.component';
import { AssetTransferVendorDialogComponent } from 'app/components/transfer/dialog/asset-transfer-vendor-dialog/asset-transfer-vendor-dialog.component';
import { assetTabsComponent } from '../../partialView/assetDetails/asset_tabs.component';
import { JwtAuthService } from '../../../shared/services/auth/jwt-auth.service';
import { ToastrService } from 'ngx-toastr';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { Constants } from 'app/components/storage/constants';
import { ManagerService } from 'app/components/storage/sessionMangaer';
import * as menuheaders from '../../../../assets/MenuHeaders.json'
import { ReconciliationService } from '../../services/ReconciliationService';
import { CompanyLocationService } from '../../services/CompanyLocationService';
import { UserMappingService } from '../../services/UserMappingService';
import { CompanyBlockService } from '../../services/CompanyBlockService';
import { GroupService } from '../../services/GroupService';
import { UserService } from '../../services/UserService';
import { MessageAlertService } from '../../../shared/services/app-msg-alert/app-msg.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AllPathService } from 'app/components/services/AllPathServices';
import { GetFieldsComponent } from 'app/components/partialView/get-fields/get-fields.component';
import { Sort } from '@angular/material/sort';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';
import { GroupDetailsComponent } from 'app/components/partialView/group-details/group-details.component';
import { ReportService } from 'app/components/services/ReportService';
import { ExportFieldsComponent } from 'app/components/partialView/export-fields/export-fields.component';
import { AddEditIssueDialogComponent } from '../dialogs/add-edit-issue-dialog/add-edit-issue-dialog.component';
import { PartsDialogComponent } from '../dialogs/parts-dialog/parts-dialog.component';
import { CmmsService } from '../../services/CmmsService';
import { AssetCategoryService } from 'app/components/services/AssetCategoryService';
import { AssetTypeService } from 'app/components/services/AssetTypeService';
import { AssetSubTypeService } from 'app/components/services/AssetSubTypeService';
import { PartsInventoryDialogComponent } from 'app/components/cmms/dialogs/parts-inventory-dialog/parts-inventory-dialog.component';
export interface SqSort extends Sort {
  //   /** The id of the column being sorted. */
  // active: string;

  // /** The sort direction. */
  // direction: SortDirection;
  type: string;
}
@Component({
  selector: 'app-parts-inventory',
  templateUrl: './parts-inventory.component.html',
  styleUrls: ['./parts-inventory.component.scss']
})
export class PartsInventoryComponent implements OnInit {

  Headers: any;
  locVal: any;
  issueType:any;
  partVal: any;
  filteredPartTypes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  message: any;
  category:any;
  type:any;
  allParts: any[] = [];
  subtype:any;
  orderTyes: any[] = [];
  issueTypes: any[] =[];
  categories: any[] = [];
  types: any[] = [];
  subTypes: any[] = [];
  numRows: number;
  withoutFilter: any
  selectedValue: string;
  IsDisabled: boolean = true;
  setflag: boolean = false;
  private isButtonVisible = false;
  private isButtonVisibleADL2 = false;
  private isButtonVisibleADL3 = false;
  private isButtonVisibleSupplier = false;
  private isButtonVisibleGRNNo = false;
  private isButtonVisibleSerialNo = false;
  private isButtonVisibleITSerialNo = false;
  private isButtonVisiblePONumber = false;
  private isButtonVisibleEqipmentNumber = false;
  private isButtonVisibleCPPNumber = false;
  private isButtonVisibleBarCode = false;
  conditionValue: any;
  public bindData: any[];
  public arrlength = 0;
  public arr = [];
  public newdataSource = [];
  public isallchk: boolean;
  public getselectedData: any[] = [];
  public selecteddatasource: any[] = [];
  public appliedfilters: any[] = [];
  AssetNoFilter = new FormControl();
  AssetClassFilter = new FormControl();
  TransferTypeFilter = new FormControl();

  filteredValues = {
    AssetNo: '', SubNo: '', CapitalizationDate: '',
    AssetClass: '', AssetType: '',
    AssetSubType: '', UOM: '', AssetName: '',
    AssetDescription: '', Qty: '', Cost: '', WDV: '',
    EquipmentNO: '', AssetCondition: '', AssetCriticality: ''
  };

  transferTypelst: any[] = [];
  result: any[] = [];
  TRANSFERTYPE: any[] = [];
  transfertype: any[] = [];
  CompanyId: any;
  GroupId: any;
  UserId: any;
  RegionId: any;
  IsCompanyAdmin: any = 1;
  IslayerDisplay: any;
  layerid: any;
  Layertext: any;
  HeaderLayerText: any;
  serachtext: any;
  colunname: any;
  menuheader: any = (menuheaders as any).default
  public transfertypeMultiCtrl: any;
  public transfertypeFilterCtrl: FormControl = new FormControl();
  public partTypeFilterCtrl: FormControl = new FormControl();
  public filteredTransferTypeMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public filteredsubtypeMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  public subtypeFilterCtrl: FormControl = new FormControl();


  public cityMultiCtrl: any;
  public cityMultiFilterCtrl: FormControl = new FormControl();
  public filteredCityMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public plantMultiCtrl: any;
  public plantMultiFilterCtrl: FormControl = new FormControl();
  public filteredPlantsMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public categoryMultiCtrl: any;
  public categoryFilterCtrl: FormControl = new FormControl();
  public filteredcategoryMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public assetclassMultiCtrl: any;
  public assetclassFilterCtrl: FormControl = new FormControl();
  filteredOrderTypes:  ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  public filteredAssetClassMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  public assettypeMultiCtrl: any;
  public assettypeFilterCtrl: FormControl = new FormControl();
  public filteredAssetTypeMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);



  public assetsubtypeMultiCtrl: any;
  orderTypeFilterCtrl: FormControl = new FormControl();;
  public assetsubtypeFilterCtrl: FormControl = new FormControl();
  public filteredAssetSubTypeMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;
  protected _onDestroy = new Subject<void>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //displayedColumns: string[] = ['select', 'InventoryNo', 'AssetNo', 'SubNo', 'CapitalizationDate', 'AssetClass', 'AssetName', 'AssetDescription', 'Qty', 'UOM', 'Cost', 'WDV', 'EquipmentNO', 'AssetCondition', 'AssetCriticality', 'Status'];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: any[] = ['select'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  selection = new SelectionModel<any>(true, []);
  tempdatasource: any[] = [];
  displayTable: boolean = false;
  displaybtn: boolean = false;
  multiSearch: any[] = [];
  constructor(public dialog: MatDialog,
    public rs: ReconciliationService,
    public cls: CompanyLocationService,
    public ums: UserMappingService,
    public cbs: CompanyBlockService,
    public gs: GroupService,
    public toastr: ToastrService,
    private storage: ManagerService,
    public confirmService: AppConfirmService,
    private loader: AppLoaderService,
    public us: UserService,
    private router: Router,
    public AllPathService: AllPathService,
    public alertService: MessageAlertService,
    public reportService: ReportService,
    private fb: FormBuilder,
    private jwtAuth: JwtAuthService,    
    private cmmsService: CmmsService,
    public categoryservice: AssetCategoryService,
    public typeservice: AssetTypeService,
    public subTypeservice: AssetSubTypeService,
  ) {

    this.Headers = this.jwtAuth.getHeaders();
    this.message = this.jwtAuth.getResources();
  }
  hdrs: any;
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  paginationParams: any;
  ngOnInit(): void {

    this.loader.open();
    this.paginationParams = {
      pageSize: 50,
      currentPageIndex: 0,
      endIndex: 0,
      startIndex: 0,
      totalCount: 0,
    }
    this.GroupId = this.storage.get(Constants.SESSSION_STORAGE, Constants.GROUP_ID);
    this.RegionId = this.storage.get(Constants.SESSSION_STORAGE, Constants.REGION_ID);
    this.CompanyId = this.storage.get(Constants.SESSSION_STORAGE, Constants.COMPANY_ID);
    this.UserId = this.storage.get(Constants.SESSSION_STORAGE, Constants.USER_ID);
    this.getOrderTypes();
    this.getCategories();


    this.cityMultiCtrl = "";
    this.categoryMultiCtrl = "";
    this.assetclassMultiCtrl = "";

    this.layerid = this.storage.get(Constants.SESSSION_STORAGE, Constants.LAYER_ID);
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
    let url1 = this.cls.GetLocationListByConfiguration(this.GroupId, this.RegionId, this.CompanyId, this.UserId, 40);
    url1.subscribe(locs=>{
      this.ListOfLoc = JSON.parse(locs);
      this.ListOfLoc1 = this.ListOfLoc;
  
 
      this.getFilterPlantType();
    });
    this.GetTransferTypes();
    this.GetInitiatedData();
    this.CheckRights();
    this.getParts();
    // this.AssetNoFilter.valueChanges.subscribe((AssetNoFilterValue) => {
    //   this.filteredValues['AssetNo'] = AssetNoFilterValue;
    //   this.dataSource.filter = this.filteredValues.AssetNo;
    // });

  }

  ListOfField: any[] = [];
  ListOfFilter: any[] = [];
  ListOfFilterName: any[] = [];
  ListOfCategory: any[] = [];
  ListOfCategory1: any[] = [];
  ListOfPagePermission: any[] = [];
  PermissionIdList: any[] = [];
  ExportedFields: any[] = [];
  GetInitiatedData() {

    let url1 = this.cls.GetLocationListByConfiguration(this.GroupId, this.UserId, this.CompanyId, this.RegionId, 40);
    let url2 = this.cbs.GetCategoryListByConfiguration(this.GroupId, this.UserId, this.CompanyId, this.RegionId, 40);
    let url3 = this.gs.GetFieldListByPageId(115,this.UserId,this.CompanyId);
    let url4 = this.gs.GetFilterIDlistByPageId(115);
    let url5 = this.gs.CheckWetherConfigurationExist(this.GroupId, 24);
    let url6 = this.us.PermissionRightsByUserIdAndPageId(this.GroupId, this.UserId, this.CompanyId, this.RegionId, "40");
    forkJoin([url1, url2, url3, url4, url5, url6]).subscribe(results => {
      if (!!results[0]) {

        this.ListOfLoc = JSON.parse(results[0]);
        this.ListOfLoc1 = this.ListOfLoc;
        this.ListOfSBU = this.UniqueArraybyId(this.ListOfLoc, this.Layertext);
        this.getFilterCityType();
        this.getFilterPlantType();
      }

      if (!!results[1]) {
        this.ListOfCategory = JSON.parse(results[1]);
        this.ListOfCategory1 = JSON.parse(results[1]);
        this.getFilterCategoryType();
      }
      if (!!results[2]) {
        // this.ListOfField = JSON.parse(results[2]);
        // this.displayedColumns = this.ListOfField;
        // console.log('binddata', this.ListOfField)
        // this.displayedColumns = this.displayedColumns.filter(x => x.IsForDefault == true).map(choice => choice.FieldName);
        // this.withoutFilter = this.ListOfField.map(choice => choice.FieldName);
        // this.displayedColumns = ['Select', 'Icon'].concat(this.displayedColumns);
        this.displayedColumns = this.ListOfField.map(choice => choice.FieldName);
           this.displayedColumns.push('PartName','LocationName','WeightedCost','AvailableQty','Mapping');
        console.log('cols',this.displayedColumns);
        this.withoutFilter = this.ListOfField.map(choice => choice.FieldName);
      }
      if (!!results[3]) {
        this.ListOfFilter = JSON.parse(results[3]);
        if (!!this.ListOfFilter) {
          this.ListOfFilter.forEach(x => this.ListOfFilterName.push(x.FilterName))
        }
      }
  
      if (!!results[5]) {
        this.ListOfPagePermission = JSON.parse(results[5]);
        if (this.ListOfPagePermission.length > 0) {
          for (var i = 0; i < this.ListOfPagePermission.length; i++) {
            this.PermissionIdList.push(this.ListOfPagePermission[i].ModulePermissionId);
          }
        }
        else {
          this.alertService.alert({ message: this.message.NotAuthorisedToAccess, title: this.message.AssetrakSays })
            .subscribe(res => {
              this.router.navigateByUrl('h/a')
            })
        }
      }
      this.loader.close();

    })
  }

  SelectionColumn(FieldName, item) {

    this.ListOfField.forEach(val => {
      if (val.FieldName == FieldName) {
        item.Tablename = val.Tables;
      }
    })
  }

  UniqueArraybyId(collection, keyname) {
    var output = [],
      keys = [];

    collection.forEach(item => {
      var key = item[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };

  addSearch() {
    var data = {
      fieldname: '',
      Tablename: '',
      Condition: '',
      HighValue: '',
      LowValue: ''
    }
    this.multiSearch.push(data);
  }

  removeSearch(i: number) {
    //this.multiSearch.removeAt(i);
  }
  // removemultipldSearch(idx) {
  //   
  //   // var idx1 = this.multiSearch.indexOf(idx);
  //   // if (idx1 > -1) {
  //   //   this.multiSearch.splice(idx1, 1);
  //   // }
  //   this.multiSearch.splice(idx, 1);
  // }  
  showmultiSearch: any = false;
  multiSearchAdd() {

    this.showmultiSearch = true;
    if (this.multiSearch = []) {
      this.addSearch();
    }
    else { }
  }
  multipleserach: boolean = false;
  onMultiSearchClick() {

    debugger;
    this.multipleserach = true;
    //this.GetAssetForTransfserBindData("multiplesearch");
    console.log(this.multiSearch);

  }
  // ngAfterViewInit(): void {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.setInitialValue();
  // }  
  //========= Transfer Type ===========
  GetTransferTypes() {
    this.rs.GetTransferTypes().subscribe(r => {
      this.result = JSON.parse(r);
      this.transfertype = this.result;
      this.transfertype.forEach(val => {
        if (val.DisplayName == "Location") {
          this.transfertypeMultiCtrl = val;
          this.showDestinationByType();
        }
      })
      this.getFilterTransferType()
    })
  }
  getFilterTransferType() {
    this.filteredTransferTypeMulti.next(this.transfertype.slice());
    this.transfertypeFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterTransfertypeMulti();
      });
  }
  protected filterTransfertypeMulti() {
    if (!this.transfertype) {
      return;
    }
    let search = this.transfertypeFilterCtrl.value;
    if (!search) {
      this.filteredTransferTypeMulti.next(this.transfertype.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredTransferTypeMulti.next(
      this.transfertype.filter(x => x.DisplayName.toLowerCase().indexOf(search) > -1)
    );
  }
  toggleSelectAlltransfertype(selectAllValue: boolean) {

    this.filteredTransferTypeMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {

        if (selectAllValue) {
          this.transfertypeMultiCtrl.patchValue(val);
        } else {
          this.transfertypeMultiCtrl.patchValue([]);
        }
      });
  }
  showLocation: boolean = true;
  ShowVendor: boolean = true;
  ShowLoan: boolean = true;
  showStorageLocations: boolean = true;
  showCostCenters: boolean = true;
  showDestinationByType() {

    if (!this.transfertypeMultiCtrl) {
      this.showLocation = false;
      this.ListOfLoc1 = [];
      this.ListOfSBU = [];
      return;
    } else {

      if (this.transfertypeMultiCtrl.Type == "Location") {
        this.showLocation = true;
        this.ShowVendor = true;
        this.ShowLoan = true;
      }
      else {
        this.showLocation = false;
        this.ShowVendor = false;
        this.ShowLoan = false;
      }
      if (this.transfertypeMultiCtrl.Type == "Storage Location") {
        this.showStorageLocations = true;
      } else {
        this.showStorageLocations = false;
      }
      if (this.transfertypeMultiCtrl.Type == "Cost Center") {
        this.showCostCenters = true;
      } else {
        this.showCostCenters = false;
      }
    }
    //this.GetLocationById();
    //this.CheckRights();
  }

  onEmpty() {
    this.ListOfLoc1 = this.ListOfLoc
    this.getFilterPlantType();
  }


  onchangeSBU(value) {
    debugger
    if (!!value) {
      var list = [];
      if (!!this.cityMultiCtrl && this.cityMultiCtrl.length > 0) {
        this.cityMultiCtrl.forEach(x => {
          this.ListOfLoc = this.ListOfLoc1.filter(y => y[this.Layertext].indexOf(x) > -1);
          this.ListOfLoc.forEach(x => {
            list.push(x);
          })
        })
        this.ListOfLoc = list;
      }
      else {
        this.ListOfLoc = this.ListOfLoc1.filter(y => y);
      }
      this.plantMultiCtrl = "";
      this.getFilterPlantType();
    }
    else {
      this.ListOfLoc = this.ListOfLoc1;
      this.plantMultiCtrl = "";
      this.getFilterPlantType();
    }
    // if (!!value) {
    //   this.ListOfLoc = this.ListOfLoc1.filter(x => x[this.Layertext].indexOf(value) > -1);
    //   this.getFilterPlantType();
    // }
    // else {
    //   this.ListOfLoc = this.ListOfLoc1.filter(x => x);
    //   this.getFilterPlantType();
    // }
  }
  //========= City ===========
  checkoutInitiationLocations: any;
  ListOfLoc: any[] = [];
  ListOfLoc1: any[] = [];
  ListOfSBU: any[] = [];

  getFilterCityType() {
    this.filteredCityMulti.next(this.ListOfSBU.slice());
    this.cityMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCityMulti();
      });
  }
  protected filterCityMulti() {

    if (!this.ListOfSBU) {
      return;
    }
    let search = this.cityMultiFilterCtrl.value;
    if (!search) {
      this.filteredCityMulti.next(this.ListOfSBU.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredCityMulti.next(
      this.ListOfSBU.filter(x => x.City.toLowerCase().indexOf(search) > -1)
    );
  }
  limit = 10;
  offset = 0;
  getFilterPlantType() {
    this.filteredPlantsMulti.next(this.ListOfLoc.slice(0, this.offset + this.limit));
    this.offset += this.limit;
    this.plantMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterPlantsMulti();
      });
  }
  protected filterPlantsMulti() {
    if (!this.ListOfLoc1) {
      return;
    }
    let search = this.plantMultiFilterCtrl.value;
    if (!search) {
      this.filteredPlantsMulti.next(this.ListOfLoc1.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredPlantsMulti.next(
      this.ListOfLoc1.filter(x => x.LocationName.toLowerCase().indexOf(search) > -1)
    );
  }
  getFilterCategoryType() {
    this.filteredcategoryMulti.next(this.ListOfCategory.slice());
    this.categoryFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCategoryMulti();
      });
  }
  protected filterCategoryMulti() {
    if (!this.ListOfCategory) {
      return;
    }
    let search = this.categoryFilterCtrl.value;
    if (!search) {
      this.filteredcategoryMulti.next(this.ListOfCategory.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredcategoryMulti.next(
      this.ListOfCategory.filter(x => x.AssetCategoryName.toLowerCase().indexOf(search) > -1)
    );
  }
  ListOfBlocks: any[] = [];
  CheckRights() {

    this.cbs.GetBlockOfAssetsByCompany(this.CompanyId).subscribe(r1 => {

      this.ListOfBlocks = r1;
      this.getFilterAssetClassType();
    })
  }
  getFilterAssetClassType() {
    this.filteredAssetClassMulti.next(this.types.slice());
    this.assetclassFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterAssetclassMulti();
      });
  }
  protected filterAssetclassMulti() {
    if (!this.types) {
      return;
    }
    let search = this.assetclassFilterCtrl.value;
    if (!search) {
      this.filteredAssetClassMulti.next(this.types.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredAssetClassMulti.next(
      this.types.filter(x => x.BlockName.toLowerCase().indexOf(search) > -1)
    );
  }
  //====== Bind Data To DataSource========  


  getFilterType(){
    // public assettypeMultiCtrl: any;
    // public assettypeFilterCtrl: FormControl = new FormControl();
    // public filteredsubtypeMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    debugger;
    this.filteredAssetTypeMulti.next(this.types.slice());
    this.assettypeFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(()=> {
        this.filterAssetTypes();
      })
  }



  filterAssetTypes(){
    if (!this.types) {
      return;
    }
    debugger;
    let search = this.assettypeFilterCtrl.value;
    if (!search) {
      this.filteredAssetTypeMulti.next(this.types.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredAssetTypeMulti.next(
      this.types.filter(x => x.TypeOfAsset.toLowerCase().indexOf(search) > -1)
    );
  }


  getFilterSubType() {
    this.filteredsubtypeMulti.next(this.subTypes.slice());
    this.subtypeFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSubTypeMulti();
      });
  }

  protected filterSubTypeMulti(){
    if (!this.subTypes) {
      return;
    }
    let search = this.subtypeFilterCtrl.value;
    if (!search) {
      this.filteredsubtypeMulti.next(this.subTypes.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredsubtypeMulti.next(
      this.subTypes.filter(x => x.SubTypeOfAsset.toLowerCase().indexOf(search) > -1)
    );
  }


  isExport: Boolean = false;
  IsSearch: boolean = false;
  issort: boolean = false;

  clickToExport() {
    if (this.displayTable == true && this.dataSource.data.length != 0) {
      this.GetAssetForTransfserBindData("IsExport");
    } else {
      if (this.displayTable == false) {
        this.toastr.warning(this.message.NoDataselected, this.message.AssetrakSays);
        return null;
      }
      else {
        this.toastr.warning(this.message.NoDataAvailable, this.message.AssetrakSays);
        return null;
      }
    }
  }
  Searchlist: any[];
  tableData: any[];
  GetAssetForTransfserBindData(Action) {

    this.loader.open();
    let data = {
      partIDS: this.partVal,
      locIDS: this.locVal
    }
    debugger;
    this.cmmsService.GetPartsInventoryWithFilter(data).subscribe(issueTypes=>{
      this.bindData = JSON.parse(issueTypes.Model);
      console.log(this.bindData);
      this.paginationParams.totalCount = issueTypes.TotalRecords > 0 ? issueTypes.TotalRecords : 0;
      this.onChangeDataSource(this.bindData);
      this.displayTable = true;
      this.loader.close();
    })
  }
  onChangeDataSource(value) {
    this.dataSource = new MatTableDataSource(value);
    this.dataSource.sort = this.sort;
    this.isAllSelected = false;
    // var ids = [];

    // for (var i = 0; i < this.bindData.length; i++) {
    //   var idx = this.getselectedIds.indexOf(this.bindData[i].PreFarId);
    //   if (idx > -1) {
    //     ids.push(this.bindData[i].PreFarId);
    //   }
    // }
    // if (this.bindData.length > 0 && this.bindData.length == ids.length) {
    //   this.isAllSelected = true;
    // }
  }

  SetPageSession() {

    var locationId = 0;
    var LocationIdList = [];
    var CategoryIdList = [];
    var BlockIdList = [];
    var TAIdList = [];
    var subTypeOfAssetList = [];

    if (!!this.plantMultiCtrl) {
      locationId = !!this.plantMultiCtrl ? this.plantMultiCtrl.LocationId : 0;
      LocationIdList.push(locationId);
    }
    else {
      this.ListOfLoc1.forEach(x => {
        LocationIdList.push(x.LocationId);
      })
    }

    if (!!this.assetclassMultiCtrl) {
      this.assetclassMultiCtrl.forEach(x => {
        BlockIdList.push(x.Id);
      })
    }

    if (!!this.categoryMultiCtrl) {
      this.categoryMultiCtrl.forEach(x => {
        CategoryIdList.push(x.AssetCategoryId);
      })
    }

    if (!!this.assettypeMultiCtrl) {
      this.assettypeMultiCtrl.forEach(x => {
        TAIdList.push(x.Id);
      })
    }

    if (!!this.assetsubtypeMultiCtrl) {
      this.assetsubtypeMultiCtrl.forEach(x => {
        subTypeOfAssetList.push(x.Id);
      })
    }

    var formData = {
      'Pagename': "Initiate Transfer",
      'SbuList': [],
      'LocationIdList': LocationIdList,
      'CategoryIdList': CategoryIdList,
      'AssetsClassList': BlockIdList,
      'typeOfAssetList': TAIdList,
      'subTypeOfAssetList': subTypeOfAssetList,
      'TransferType': !!this.transfertypeMultiCtrl ? this.transfertypeMultiCtrl.Id : 0,
    };

    localStorage.setItem('PageSession', JSON.stringify(formData));
  }



  editGridpop() {

    let title = 'Edit Grid Display';
    const dialogRef = this.dialog.open(GetFieldsComponent, {
      width: '60vw',
      height: 'auto',
      data: { title: title, payload: this.ListOfField }
    })
    dialogRef.afterClosed().subscribe(result => {

      if (!!result) {
        console.log(result)
        this.ListOfField = result;
        this.displayedColumns = this.ListOfField;
        console.log(this.displayedColumns);
        this.displayedColumns = this.ListOfField.filter(x => x.Custom2 == "1" ).map(choice => choice.Custom1);
        this.displayedColumns = ['Select', 'Icon'].concat(this.displayedColumns);
      }
    })
  }

  CategoryGetdata() {
    debugger
    var PlantList = [];
    if (!!this.plantMultiCtrl) {
      var locationId = !!this.plantMultiCtrl ? this.plantMultiCtrl.LocationId : 0;
      PlantList.push(locationId);
    }
    else {
      this.ListOfLoc.forEach(x => {
        PlantList.push(x.LocationId);
      })
    }


    this.reportService.GetCategoryRightWiseForReport(this.CompanyId, this.UserId, PlantList, false, 24).subscribe(r => {
      this.ListOfCategory = [];
      r.forEach(element => {
        // this.ListOfCategory=[];
        this.ListOfCategory.push(element);
        this.getFilterCategoryType();
      });
    })
  }



  numSelected: any = 0;
  getselectedIds: any[] = [];
  isAllSelected: boolean = false;
  masterToggle() {

    this.isAllSelected = !this.isAllSelected;
    this.selection.clear();
    this.getselectedIds = [];
    if (this.isAllSelected == true) {
      this.dataSource.data.forEach(row => {
        if (!row.allocatedStatus) {
          this.selection.select(row)
        }
      });
    }
    // else {
    //   this.dataSource.data.forEach(row => this.selection.toggle(row));
    // }
    this.numSelected = this.selection.selected.length;
    if (this.numSelected > 0) {
      this.selection.selected.forEach(row => this.getselectedIds.push(row.PreFarId));
    }
  }

  isSelected(row) {
    this.isAllSelected = false;
    this.selection.toggle(row)
    this.numSelected = this.selection.selected.length;
    var idx = this.getselectedIds.indexOf(row.PreFarId);
    if (idx > -1) {
      this.getselectedIds.splice(idx, 1);
    }
    else {
      this.getselectedIds.push(row.PreFarId);
    }
  }

  GetSubGroupJson(element) {
    let title = 'Group Details';
    const dialogRef = this.dialog.open(GroupDetailsComponent, {
      width: 'auto',
      data: { title: title, payload: element.PreFarId }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {

      }
    })
  }
  toggleSelectAllCity(selectAllValue) {
    this.cityMultiCtrl = [];
    this.filteredCityMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (!!selectAllValue.checked) {
          this.ListOfSBU.forEach(element => {
            this.cityMultiCtrl.push(element[this.Layertext]);
          });
        } else {
          this.cityMultiCtrl = "";
        }
        this.onchangeSBU('');
      });
  }

  toggleSelectAll(selectAllValue) {
    this.plantMultiCtrl = [];
    this.filteredPlantsMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (!!selectAllValue.checked) {
          //this.plantMultiCtrl.patchValue(val);
          this.ListOfLoc.forEach(element => {
            this.plantMultiCtrl.push(element);
          });
        } else {
          this.plantMultiCtrl = "";
        }
        this.ListOfCategory = this.ListOfCategory1;
        this.getFilterCategoryType();
      });
  }
  toggleSelectAllcategory(selectAllValue) {
    this.categoryMultiCtrl = [];
    this.filteredcategoryMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (!!selectAllValue.checked) {
          this.ListOfCategory.forEach(element => {
            this.categoryMultiCtrl.push(element);
          });
        } else {
          this.categoryMultiCtrl = "";
        }
      });
  }

  toggleSelectAllassetclass(selectAllValue) {
    this.assetclassMultiCtrl = [];
    this.filteredAssetClassMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (!!selectAllValue.checked) {
          this.ListOfBlocks.forEach(element => {
            this.assetclassMultiCtrl.push(element);
          });
        } else {
          this.assetclassMultiCtrl = "";
        }
      });
  }

  openInfoDialog(todo: String,data: any,idx:any){
    let title = 'Info';

    let dialogData;
    if(todo=='add')
     dialogData = {
      width: '65vw',
      height: 'auto',
      data: { title: title, payload: this.ListOfField,task: todo }
    };
    else if(todo=='edit')
    dialogData = {
      width: '65vw',
      height: 'auto',
      data: { title: title, payload: this.ListOfField, rowData: data,task: todo }
    };
    else if(todo=='view')
    dialogData = {
      width: '65vw',
      height: 'auto',
      disableClose : true,
      data: { title: title, payload: this.ListOfField, rowData: data,task: todo }
    };
    
    else if(todo=='delete'){
      if(idx>-1){
        this.confirmService.confirm({ message: "Are you sure you want to delete Part?", title: this.message.AssetrakSays })
        .subscribe(res => {
          if (res) {
            this.cmmsService.DeletePartInventoryByID(data.InventoryID).subscribe(res=>{
              this.GetAssetForTransfserBindData("");
              this.toastr.error('Part deleted successfully!!',this.message.AssetrakSays); 
            });
          }
        })
        return;
      }
    }
    console.log(dialogData.data.rowData);
    if(todo == 'add' || todo == 'edit'){
        const dialogRef = this.dialog.open(PartsInventoryDialogComponent, dialogData)
        dialogRef.afterClosed().subscribe(result => {
          if (!!result) { 
            if(result=='close') return;
            if(todo=='add')  {
             this.cmmsService.AddUpdatePartsInventory(result).subscribe(res=>{
               this.GetAssetForTransfserBindData("");
             })
            }
            else {
              this.cmmsService.AddUpdatePartsInventory(result).subscribe(res=>{
                this.GetAssetForTransfserBindData("");
              })
            }
            
          }
          else {
            
            if(idx>-1){
              this.confirmService.confirm({ message: "delete Part", title: this.message.AssetrakSays })
              .subscribe(res => {
                if (res) {
                  this.cmmsService.DeletePartInventoryByID(data.InventoryID).subscribe(res=>{
                    this.GetAssetForTransfserBindData("");
                    this.toastr.error('Part deleted successfully!!',this.message.AssetrakSays); 
                  });
              
                }
              })
       
            }
            
          }
        })
    }

  }
  handlePage(pageEvent: PageEvent) {


  }

  getOrderTypes(){
    this.cmmsService.getOrderTypes().subscribe(res=>{
      debugger; 
      this.orderTyes = JSON.parse(res.Model);
      this.getFilterOrderType()
      console.log(this.orderTyes);
    })
  }

  getCategories(){
    this.categoryservice.GetAllCategoryData(this.GroupId, this.RegionId, this.CompanyId).subscribe(response => {
      debugger;
      this.categories = response;

      // this.onChangeDataSource(response);
    })
  }

  GetAllTypeData() {
    this.loader.open();
 
   var typeData = {
     categoryIds: this.category,
     groupId: this.GroupId,
     regionId: this.RegionId,
     companyId: this.CompanyId,
   }

   this.cmmsService.GetAssetTypesByCategoryIds(typeData).subscribe(response => {
      this.loader.close();
     this.types = response.Model;
     this.getFilterType()
     debugger;
   })
 }

 GetAllSubTypeByCategoryIdTypeId() {
   this.loader.open();
   var subTypeData = {
     typeIds: this.type,
     groupId: this.GroupId,
     regionId: this.RegionId,
     companyId: this.CompanyId,
   }

   this.cmmsService.getAssetSubTypesByTypeIds(subTypeData).subscribe(response => {
     this.loader.close();
     this.subTypes = response.Model;
     this.getFilterSubType();
     // this.onChangeDataSourceS(response);
   })
 }


 getFilterOrderType() {
  this.filteredOrderTypes.next(this.orderTyes.slice());
  this.orderTypeFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterOrderTypes();
    });
}
filterOrderTypes(){
  if (!this.orderTyes) {
    return;
  }
  // get the search keyword
  let search = this.orderTypeFilterCtrl.value;
  if (!search) {
    this.filteredOrderTypes.next(this.orderTyes.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredOrderTypes.next(
    this.orderTyes.filter(ot => ot.OrderType.toLowerCase().indexOf(search) > -1)
  );
}

getParts() {
  this.cmmsService.getAllParts().subscribe(res=>{
    this.allParts = JSON.parse(res.Model);
    console.log(this.allParts);
    this.getPartFilter();
  })
}
getPartFilter() {
  this.filteredPartTypes.next(this.allParts.slice());
  this.partTypeFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.FilterPlantTypes();
    });
}

FilterPlantTypes() {
  if (!this.allParts) {
    return;
  }
  // get the search keyword
  let search = this.partTypeFilterCtrl.value;
  if (!search) {
    this.filteredPartTypes.next(this.allParts.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredPartTypes.next(
    this.allParts.filter(ot => ot.PartName.toLowerCase().indexOf(search) > -1)
  );
}
}
