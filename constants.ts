import { Category, DocumentItem } from './types';

const createRealItem = (
  id: string,
  dateRaw: string,
  title: string,
  category: Category,
  subCategory: string,
  driveId: string = 'pending_id',
  description: string = ''
): DocumentItem => {
  // Format YYYYMMDD to YYYY-MM-DD
  const date = `${dateRaw.substring(0, 4)}-${dateRaw.substring(4, 6)}-${dateRaw.substring(6, 8)}`;
  return {
    id,
    title,
    category,
    subCategory,
    date,
    driveId, 
    description
  };
};

const createFormItem = (
  id: string,
  title: string,
  category: Category,
  subCategory: string,
  driveId: string,
  description: string = ''
): DocumentItem => ({
  id,
  title,
  category,
  subCategory,
  date: '', // No date for forms
  driveId,
  description
});

export const REGULATIONS_DATA: DocumentItem[] = [
  // 組織系列 (Organization Series)
  createRealItem('reg_org_01', '20231207', '工作規則', Category.REGULATIONS, '組織系列', '162Ypn3-kp7ENhSdJ2KByYrH3zWxyPCdl', '規範本公司全體同仁之基本行為準則、勞動權益、義務及獎懲標準，為公司治理之基礎法規。'),
  createRealItem('reg_org_02', '20250201', '目標與目的規章', Category.REGULATIONS, '組織系列', '1eTqS3bMABIexMjFmjighRF-932K-iwYtxGCuxTqi7SA', '明確定義公司短期、中期及長期之發展目標與核心目的，確保組織上下目標一致。'),
  createRealItem('reg_org_03', '20250201', '公司歷史規章', Category.REGULATIONS, '組織系列', '1sqckdA0LorOmgAPLTPVcd5IX9glpY6JrCnDpLE011BU', '記錄公司成立至今之重要里程碑與發展歷程，傳承企業文化與價值。'),
  createRealItem('reg_org_04', '20250201', '最終有價值產品規章', Category.REGULATIONS, '組織系列', '1LkRpu50VcovwOldcXcVf62ZjN-Vc0ghpha82SM2XSx8', '定義公司對客戶交付之最終產品與服務標準，確保產出符合市場與客戶期待之價值。'),
  createRealItem('reg_org_05', '20250201', '組織圖使用規章', Category.REGULATIONS, '組織系列', '1Uo1MSRM_Wk60sPmbzSRisHozcB5aEYn6y0C3sE4XmdY', '說明公司組織架構圖之編制原則與閱讀方式，釐清各部門職能與指揮鏈。'),
  createRealItem('reg_org_06', '20250201', '各課的職責', Category.REGULATIONS, '組織系列', '1ku0Ej2LLShAs8LZzGINfrTEOmOVT2U422_cU4DoYAsQ', '詳細規範各課級單位之功能職掌與業務範圍，劃分工作權責邊界。'),
  createRealItem('reg_org_07', '20250201', '每週職員會議規章', Category.REGULATIONS, '組織系列', '1ohWmuWllovNUWZ-n_q9jOXY2-cUC-ACAUQJ8sEyCXZQ', '規範週會之召開時間、議程安排、出席人員及會議記錄方式，提升會議效率。'),
  createRealItem('reg_org_08', '20250201', '書面溝通規章', Category.REGULATIONS, '組織系列', '1iaUQH5ld4MwWAbUg7Cnaw9EXpm6yCSTqj-T9XUUzpX0', '建立內部書面傳達與公文流轉之標準格式與程序，確保訊息傳遞準確無誤。'),
  createRealItem('reg_org_09', '20250201', '命令規章', Category.REGULATIONS, '組織系列', '1Tc1y9xmOER4fa6lJ0JR5YHlGpYI13RDrb585Xi4Mg5w', '規範上級對下級下達指令之方式與效力，確保命令之合法性與執行力。'),
  createRealItem('reg_org_10', '20260115', 'CSW規章', Category.REGULATIONS, '組織系列', '1lU7gyS4a1zoKhOJA4_WUqelVHQ0pr2fiFUdxGPuLrI8', '定義完成工作(Completed Staff Work)之標準，要求同仁在呈報方案前需完成完整分析與建議。'),
  createRealItem('reg_org_11', '20250201', '工作資料夾規章', Category.REGULATIONS, '組織系列', '1LL5FQQwiqjJf8MaXXUwUPBhqEmDSmhfKm95CcyEpDPI', '規範個人工作資料夾之分類、整理與保存方式，提升資料檢索效率。'),
  createRealItem('reg_org_12', '20250201', '工作資料夾檢視規章', Category.REGULATIONS, '組織系列', '1Z-A26U00KEfRUfp2pGWUmHVkU1N_lElXT3yCT790jZw', '建立主管定期檢視部屬工作資料夾之機制，確保工作進度與品質受控。'),
  createRealItem('reg_org_13', '20250201', '如何撰寫規章的規章', Category.REGULATIONS, '組織系列', '1c3sAQv1uzgKfm3w3jPlLBdlzXlOfv3SIBVPxLRursIo', '制定內部規章制度之撰寫格式、編碼原則與發布流程，統一文件標準。'),
  createRealItem('reg_org_14', '20250201', '統計曲線規章', Category.REGULATIONS, '組織系列', '1qNhw6b_9OM3q-HSjuZbNsK6svpiwFMRRyd0TGsNTfEU', '規範各項績效指標(KPI)之統計、繪製與分析方法，作為管理決策依據。'),
  createRealItem('reg_org_15', '20250206', '職員出勤規章', Category.REGULATIONS, '組織系列', '17wdy8YJ-IeBDUjsmLi0pSYYF572BPvH3_WRaHUL3ctM', '明定上下班時間、遲到早退、請假與加班之管理辦法，維護職場紀律。'),
  createRealItem('reg_org_16', '20250120', '如何修改公司管理工具規章', Category.REGULATIONS, '組織系列', '1nzs_RmDkEtFRlzozNbHthElDOJTH1H9ulqD33Gtj54g', '規範現行管理工具與表格之修訂權限與變更流程，確保工具適用性。'),
  createRealItem('reg_org_17', '20250201', '辦公室用品操作與管理規章', Category.REGULATIONS, '組織系列', '1INOPF34RMO_gUh5gegOBNSwK101r9Z78e17Er8E7T9Y', '規範辦公設備與耗材之申請、使用、維護與保管責任，避免資源浪費。'),
  createRealItem('reg_org_18', '20240614', '印鑑與負責人簽名管理規章', Category.REGULATIONS, '組織系列', '1R7dp1eWYWbbhM4SoHly1dZPdHs0pShHL3OWjMVGcuRI', '嚴格控管公司大小章與負責人簽字章之使用權限與用印紀錄，防範法律風險。'),
  createRealItem('reg_org_19', '20240418', '協調手冊', Category.REGULATIONS, '組織系列', '1NfBiBdyS7Pf4mlhbsYuZrleas88Ga_t-Sbw4OVfyT8E', '提供跨部門溝通與協作之指導原則與常見問題解決方案，降低內耗。'),
  createRealItem('reg_org_20', '20240422', '如何移轉職責', Category.REGULATIONS, '組織系列', '11iA-peENwzDCVinKlT_FMuEjD6hzpjyY9qPAY9XTNtw', '建立職務輪調或離職時之交接清單與程序，確保業務不中斷。'),
  createRealItem('reg_org_21', '20240422', '如何開始在新職位上運作', Category.REGULATIONS, '組織系列', '10Yc-fZfdW_CtTuARuPov0NVvM95YNSTDZ_eVfuYb3-o', '指導新進或轉調人員如何快速適應新職位、理解職責並展開工作。'),
  createRealItem('reg_org_22', '20240821', '企業主10年戰略方針', Category.REGULATIONS, '組織系列', '1FkCVnLRd0mhCGDsbFaEvoyVZXSDn7NzXwCBhvw7Miss', '揭示企業主對未來十年之宏觀願景與戰略佈局，引領公司長期發展方向。'),
  createRealItem('reg_org_23', '20240821', '管理等級表(2025年版)', Category.REGULATIONS, '組織系列', '1_IRQ1fhBttZnYvCnnwtXELGCFAaOYhKrVQFhxdewc3I', '定義公司內部管理職級體系與對應之權責範圍，作為晉升與核薪依據。'),
  createRealItem('reg_org_24', '20240422', '個人職務說明培訓', Category.REGULATIONS, '組織系列', '1JmFMkUXkYe2k3SRL0tNG_IbBl5KtwOr-IJZy48-q7RA', '規範員工對自身職務說明書之理解與定期培訓機制，確保人崗匹配。'),
  createRealItem('reg_org_25', '20240422', '主管的責任', Category.REGULATIONS, '組織系列', '1eQbbZOSe61-zxRrsyPoUQU9ygNIQX6EgOtcADgSOM4A', '明列各級主管在團隊領導、績效管理與人才培育上之核心責任。'),
  createRealItem('reg_org_26', '20240502', '腦力激盪', Category.REGULATIONS, '組織系列', '1zDHVImzFwPgxILJje9qjSQFZu5OiQ_WtHlWNFOuQ0PM', '規範創意思考會議之進行方式與原則，鼓勵全員參與創新提案。'),
  createRealItem('reg_org_27', '20240513', '應付與組織規章', Category.REGULATIONS, '組織系列', '1Ec6bN0ePj2iLtJNicWaimW71AeynIfgT7REUyV5bzJw', '規範應付帳款之審核流程與付款條件，與組織財務調度配合。'),
  createRealItem('reg_org_28', '20250106', '年度計畫規章', Category.REGULATIONS, '組織系列', '1LSoCk9inoTTUC4BA-yXCss6HiU9mXwapfAOXkzi-0Gg', '制定年度營運計畫之編制、審查與修正流程，確保年度目標具體可行。'),
  createRealItem('reg_org_29', '20241114', '集團行事曆規章', Category.REGULATIONS, '組織系列', '1VC2NhVz4pfi0dMLiIxrIWkhx2iWLH7BReCfDRoY2xto', '統一規範集團內部重要活動、會議與休假之行事曆安排原則。'),
  createRealItem('reg_org_30', '20250306', '職員終止契約與職務移轉規章', Category.REGULATIONS, '組織系列', '1O43I83txCawPkKjiD0nOecEbSgrGWtnmoucxmnFq6nM', '詳述員工離職、解雇時之契約終止程序與業務交接規範，保障雙方權益。'),
  createRealItem('reg_org_31', '20240715', '職務說明 公版', Category.REGULATIONS, '組織系列', '13y4I-WmtBJZM7Gf2-5Uds0LqfwQYP16n', '提供標準化之職務說明書範本，供各部門制定職位內容時參考使用。'),
  createRealItem('reg_org_32', '20241114', '職務職責與運行規章', Category.REGULATIONS, '組織系列', '11KSGIeCLfk97jXwmP09DMkhhl0z2O9fwxBoTtjmj54s', '規範職務職責之履行方式與日常運行準則，確保組織運作順暢。'),
  createRealItem('reg_org_33', '20240815', '出差費用管理辦法規章', Category.REGULATIONS, '組織系列', '1DiCgOu38eg1RpdBXQjUY2qr6RcWn9Uw0ZJesmVnzWCQ', '訂定國內外之差旅費申請標準、報銷單據要求與核決權限。'),
  createRealItem('reg_org_34', '20240715', '職務移轉規章附件', Category.REGULATIONS, '組織系列', '1-yTTqGmEaMeq_hVA5wvtuCKfa5hj6cYiBLB-FpGytjA', '提供職務移轉所需之各類檢核表、清冊範本等附件資料。'),
  createRealItem('reg_org_35', '20240715', '職務移轉規章', Category.REGULATIONS, '組織系列', '1wqSOXXp6pmjP5xH8Bq5dzEbCoGhV2CqFeaPTyfBZMhY', '制定職務交接之標準作業程序(SOP)，確保知識與資產完整移轉。'),
  createRealItem('reg_org_36', '20250206', '投資客戶資料管理規則', Category.REGULATIONS, '組織系列', '13NNiO_cmzUF2T3egu8phmUijc-lFKASpeNjv-4pjobg', '嚴格規範投資客戶個資之蒐集、處理、利用與保護措施，符合個資法規。'),
  createRealItem('reg_org_37', '20250206', '戰略與戰術會議規章', Category.REGULATIONS, '組織系列', '1wMquAiR4Sso1svSW4yub_Bw1XjaZXe47JubtgdjrtgM', '區分高階戰略會議與執行層戰術會議之召開目的與層級，提升決策品質。'),
  createRealItem('reg_org_38', '20250227', '企業文件審核規範', Category.REGULATIONS, '組織系列', '14rlMJ89loSK-S_wFWkkKkM_xXc2TRKETlzKNDnohRew', '建立對外發布文件與內部重要公告之審核機制，確保資訊正確合規。'),
  createRealItem('reg_org_39', '20250327', '簽約獎金政策規章', Category.REGULATIONS, '組織系列', '18D1Dp3E3zfajABxt8SenCrOY_in4ZWBziJQLU2mwbPs', '訂定業務簽約獎金之發放標準、計算公式與領取條件。'),
  createRealItem('reg_org_40', '20250327', '專案管理規章', Category.REGULATIONS, '組織系列', '1eSRecDt0eCfGVVz0ggKvq35KBXEOsNRHmuFahvH9RXg', '規範專案立項、執行、監控至結案之全生命週期管理流程。'),
  createRealItem('reg_org_41', '20250416', '合約規章', Category.REGULATIONS, '組織系列', '1GNgY8kTjzZ4VQoVu6Nblo2luo9z3iZfYr9znVGpX1mg', '規範公司各類合約之擬定、審閱、簽署與用印流程，控管法律風險。'),
  createRealItem('reg_org_42', '20250418', '年度目標展開與執行流程規章', Category.REGULATIONS, '組織系列', '1zwgQyS4rba3aayyNZ8XQvM2wUQa6z1csKlTcozGi_bM', '說明如何將公司年度大目標拆解為部門及個人行動計畫之執行步驟。'),
  createRealItem('reg_org_43', '20250523', '人力招募與任用', Category.REGULATIONS, '組織系列', '13aSUbNn7gz1E-Gcn0Mlp5Tt8uTd6ukdWCXaZPNhE54E', '制定人員增補之申請、面試、錄用及報到流程，確保人才素質。'),
  createRealItem('reg_org_44', '20250613', '職員內部公關', Category.REGULATIONS, '組織系列', '1vIk5lgpCBvVqkjR299-uq0mglQ4L_JFMVb8B96p1ljc', '規範內部溝通與員工關係維護活動，提升員工向心力與滿意度。'),
  createRealItem('reg_org_45', '20250613', '感謝小卡', Category.REGULATIONS, '組織系列', '1FAIpQLSeZvkR5M8M31ryjYwSzj5f3tRnNFf17GVcmsqHo0VTDtufc2w', '推動內部感謝文化，鼓勵同仁透過小卡表達謝意，增進團隊情感。'),
  createRealItem('reg_org_46', '20250613', '穩盈策略顧問股份有限公司 行政管理等級表', Category.REGULATIONS, '組織系列', '14ekkF3a2lNY5VGtdep5u6v4-usQ-lkeePc4txia_nHY', '針對穩盈策略顧問公司量身訂做之行政管理職級與權責對照表。'),
  createRealItem('reg_org_47', '20250620', '企業宣傳與教育發布規範', Category.REGULATIONS, '組織系列', '1lBqwNgG_fX2mlANTlYeDgITpHOxWD8sVgv43t979nWk', '規範對外宣傳素材與對內教育訓練教材之製作、審核與發布標準。'),
  createRealItem('reg_org_48', '20260115', '職災處理辦法', Category.REGULATIONS, '組織系列', '1vFL9JKH89MYZxtRJl7wOz88-I-Mna1-30y6inRJ9FIo', '建立職業災害之通報、急救、調查與補償處理程序，保障員工安全。'),
  createRealItem('reg_org_49', '20250620', '文書檔案管理', Category.REGULATIONS, '組織系列', '1Wq7q3OQp-0LqPYOFmoUvmct5vyMiY2qd', '規範公司所有實體與電子文書檔案之分類、編碼、保存與銷毀年限。'),
  createRealItem('reg_org_50', '20260115', '文件審查規章', Category.REGULATIONS, '組織系列', '13BVLST5ywds1CTy91HU2498WJ2D1j9NRipKS2pJysRs', '制定各類業務文件之審查層級與重點檢核項目，確保文件品質。'),
  createRealItem('reg_org_51', '20250731', '會議規章', Category.REGULATIONS, '組織系列', '1lr1oE7VFL8Csr5bWv00aC_-aPI-e9UWYz3PuGhIFJOI', '通用的會議管理規則，包含會議室預約、設備使用及會後追蹤事項。'),
  createRealItem('reg_org_52', '20250905', '流程圖製作與審核', Category.REGULATIONS, '組織系列', '1zSHcN0Ticx7o375NBkU3M4bdYqv9wA2ge5jn8BSKWWU', '規範作業流程圖(Flowchart)之繪製符號標準、製作工具與審核發布流程。'),
  createRealItem('reg_org_53', '20251113', '法律案件責任與協作管理', Category.REGULATIONS, '組織系列', '11oKV6mLijdVG5L9cNJdi0wmhce3MKhLp49s5DB05XOQ', '明確定義涉訟案件之內部權責單位與跨部門協作機制，有效應對法律爭議。'),
  createRealItem('reg_org_54', '20251120', '獎金與激勵辦法', Category.REGULATIONS, '組織系列', '1LaZNZfvdwmx3SJicbm8l22j-UHfGJPG7pZzUeEcgVz0', '制定各類績效獎金、專案獎金之激勵方案，驅動員工達成高績效。'),
  createRealItem('reg_org_55', '20251107', '績效管理與考核辦法', Category.REGULATIONS, '組織系列', '1o8f_penur56ymLaKpJke3cYBGrcjqxB6KDjFSI7q8NE', '建立定期績效評估機制，包含考核指標設定、面談回饋與結果應用。'),
  createRealItem('reg_org_56', '20251107', '薪酬結構辦法', Category.REGULATIONS, '組織系列', '1qJfjUte_VEVqwMjIYi1vA9Lm_8sRYOD34zBiwpaRUgg', '說明公司薪資結構組成(本薪、津貼、獎金等)與核敘薪原則。'),
  createRealItem('reg_org_57', '20251114', '職員培訓辦法', Category.REGULATIONS, '組織系列', '1I-RB7rBn99vvmQMNyh9BVevA13UW3po4LMU6iGZ5Wno', '規劃新進人員訓練、在職訓練與專業職能培訓之實施體系。'),
  createRealItem('reg_org_58', '20251114', '職員發展與晉升辦法', Category.REGULATIONS, '組織系列', '1NnMTD1e8xLOemtLwQzqVJhkHIm1FX9dvnBPChEGfHAo', '建立明確之職涯發展路徑與晉升評選標準，留任優秀人才。'),
  createRealItem('reg_org_59', '20260116', '融資經營品格政策', Category.REGULATIONS, '組織系列', '1s2fhoKvgU2fxt7hkKaNjuuhPHf76ixVovWsgrnRCQQQ', '針對融資業務單位制定之道德行為準則與誠信經營政策。'),
  createRealItem('reg_org_60', '20260122', '商務衝突與人員安全防護管理辦法', Category.REGULATIONS, '組織系列', '1ndW7o_SL5jDa2r2l7vzLgoRwnxbOmWy6H53ATZtJV1M', '指導同仁面對商務糾紛與衝突場面時之應對措施，首重人員安全。'),
  createRealItem('reg_org_61', '20260129', '帳號管理規章', Category.REGULATIONS, '組織系列', '1UWPkkwxgpC45yNa6zgAW8kDEZNzCt_g-VdUpxOLyJAE', '規範各類資訊系統帳號之申請、權限設定、密碼原則與停用管理。'),

  // 技術系列 (Technical Series)
  createRealItem('reg_tech_01', '20241205', '公佈欄發布規章', Category.REGULATIONS, '技術系列', '1-xUgpXYp5hVb4IYzvmq4KJtxyOwa9Z00YBytMvqPi54', '規範實體與數位公佈欄之張貼權限、內容審核與有效期限管理。'),
  createRealItem('reg_tech_02', '20240703', '應收帳款分期客戶合約到期展期', Category.REGULATIONS, '技術系列', '1Ksv32RKYyyloO12G1adtfgZ7A3WQTTNzc_olZAXExLs', '制定應收帳款客戶申請合約展期之審核標準與作業流程。'),
  createRealItem('reg_tech_03', '20240902', '帳務系統操作手冊', Category.REGULATIONS, '技術系列', '1xMCeaP-ayd9O6AGueHyTMRS0bbJGvPGLZmz4JNoJslI', '詳細說明內部帳務系統之功能介面與各項作業之操作步驟。'),
  createRealItem('reg_tech_04', '20241217', '不動產鑑價作業規章', Category.REGULATIONS, '技術系列', '1_82d8VjrequcHkIJKNryNNBlOTBYp7Cs9O3ReyChSPU', '建立不動產抵押品之估價標準、鑑價方法與報告產出規範。'),
  createRealItem('reg_tech_05', '20241114', '財富奧秘之旅玩家指南規章', Category.REGULATIONS, '技術系列', '15S_ZiwellhyuMvi_6ZqkU9UIhjHYvx_beaeY_5P4fj8', '針對「財富奧秘之旅」活動之參與規則、流程與注意事項進行說明。'),
  createRealItem('reg_tech_06', '20240520', '銀行金鑰管理規章', Category.REGULATIONS, '技術系列', '1meaTo3hZrCpbVr3utXUu_2G_WI-fAYElqq2HaYv2AKE', '嚴格控管網路銀行金鑰(Token)之保管人、使用權限與交接流程。'),
  createRealItem('reg_tech_07', '20250730', '客戶借款違約金減免規範', Category.REGULATIONS, '技術系列', '1sENv03QyGSyUQ33ZideG2gqfgJNnkYKEFKxUKO0Gxtk', '明定客戶申請違約金減免之適用條件、審核層級與核准額度。'),
  createRealItem('reg_tech_08', '20260115', '案件授信準則', Category.REGULATIONS, '技術系列', '1XBWiowUJJcEzECwgKDV3E0kxZ8rZO7Qphd2EG5hBKqE', '建立放款案件之徵信調查標準與授信風險評估原則(5P原則)。'),
  createRealItem('reg_tech_09', '20240320', '案件催收壓力等級表', Category.REGULATIONS, '技術系列', '1SMH-AgOZAKoTICJj9OF-j6mPeLBx67lJ', '定義不同逾期天數與風險程度案件之對應催收強度與行動方案。'),
  createRealItem('reg_tech_10', '20250711', '個案合約審核及管理辦法', Category.REGULATIONS, '技術系列', '1LKFe8k9ykFYdW-FKa1cNt2faqG8zczUrOFuNf7EOgZg', '規範個別業務案件合約之特殊條款審核流程與歸檔管理。'),
  createRealItem('reg_tech_11', '20250711', '不動產擔保提供報酬規範', Category.REGULATIONS, '技術系列', '1TB7iIazCdSpNTQ9xlbU9l4Owa1uYy0R9ZVL9m8aP52k', '訂定提供不動產作為擔保品之相關報酬計算與支付標準。'),
  createRealItem('reg_tech_12', '20250716', '案件移轉辦法', Category.REGULATIONS, '技術系列', '1ZIQ6u0c8melyW2qfIcfQjhNtrHr7RjCqcoBfOoij3HI', '規範業務人員變動時，案件管理權責之移轉清冊與交接確認程序。'),
  createRealItem('reg_tech_13', '20250731', '投資人會員分級規章', Category.REGULATIONS, '技術系列', '1SinDUT_rduYlov2kbs32mhf3V6H-Ra1VcPgvRov1rkE', '建立投資人會員分級制度，定義各級別之權益、門檻與服務內容。'),
  createRealItem('reg_tech_14', '20250814', '投資人投資流程規章', Category.REGULATIONS, '技術系列', '1Mwde1iuceOSp-vRpXuGN5Sz8TwgbQ5rLJLEexVMSf8Y', '說明投資人從入金、簽約到完成投資配置之標準作業流程。'),
  createRealItem('reg_tech_15', '20250814', '投資人退資流程規章', Category.REGULATIONS, '技術系列', '1XuOBsViU9XRXkdrWlZm7P9QDu2fY_DxD1brEmnJL5cg', '規範投資人申請贖回或退資之申請時程、結算方式與匯款流程。'),
  createRealItem('reg_tech_16', '20250905', '投資通路管理規範', Category.REGULATIONS, '技術系列', '1Es4kjY_Ka3feA-3Um3WeHkTLtn0AqoqoQ-drOkArrII', '管理各類資金募集通路之合作模式、分潤機制與合規性監控。'),
  createRealItem('reg_tech_17', '20251017', '客戶逾期支付利息管理與減免辦法', Category.REGULATIONS, '技術系列', '1v-PUTO8GOL4Xnca8bY2bGkPZU5ezo4Dd7N-1SWF9l2Q', '針對客戶逾期繳息之催告程序與利息減免協商機制進行規範。'),
  createRealItem('reg_tech_18', '20260130', '募資業務獎金分潤規範', Category.REGULATIONS, '技術系列', '1uXMmbKBBoABEJ47d0X2hzdLtS6ScuUbglD0U36a-SqI', '訂定募資團隊之業績獎金計算方式與利潤分配原則。'),

  // 財務系列 (Financial Series)
  createRealItem('reg_fin_01', '20250206', '財務計畫3.0規章', Category.REGULATIONS, '財務系列', '1d1Y96RYF7BVznr67jlPZeK-G7l0NoLJCmJzS48js-uU', '升級版之公司整體財務規劃，涵蓋預算控制、現金流管理與投資策略。'),
  createRealItem('reg_fin_02', '20241225', '集團內部借貸規則', Category.REGULATIONS, '財務系列', '1Y4Z7HRLAmPXZst3Bzt3ZFLpgszUcUqFQJyBoN9c_fNE', '規範集團關係企業間資金調度之借貸利率、額度與還款條件。'),
  createRealItem('reg_fin_03', '20250227', '借款案件報價與獎勵規章', Category.REGULATIONS, '財務系列', '1ZvVhP_00-W_KpbqmSRcZybi7TMb49YpFAHB7aPK4KnA', '制定借款案件之利率報價指引與成功核貸之業務獎勵辦法。'),
  createRealItem('reg_fin_04', '20260129', '財務及會計規章', Category.REGULATIONS, '財務系列', '1alDWigBxatL-w9pdk_OgBeRI7IH5uwqwWeiRbliqOD8', '建立符合會計準則之帳務處理原則、憑證管理與財務報表編制規範。'),
  createRealItem('reg_fin_05', '20260129', '稅務計畫', Category.REGULATIONS, '財務系列', '1LJcLSJzwS1s79z6gkZgWftZjVMKzBZcrAoM6mGC1QJQ', '規劃公司年度稅務申報時程與合法節稅策略，降低稅務風險。'),
  createRealItem('reg_fin_06', '20260129', '帳務計畫', Category.REGULATIONS, '財務系列', '1SQrsNpjLHLD0RPP3CWc7kgeubGM_X-pn5XOlcYS_Agg', '規劃會計帳務系統之架構設計、科目設定與結帳作業時程。'),

  // 行銷系列 (Marketing Series)
  createRealItem('reg_mkt_01', '20250206', '行銷外包規定', Category.REGULATIONS, '行銷系列', '1HanQAEhbq2AwcUQ6si-zVPObSR00Hgxf-8vQGmJC8wA', '規範行銷業務委外之廠商遴選、合約簽訂與成效驗收標準。'),

  // 品格系列 (Character/Ethics Series)
  createRealItem('reg_char_01', '20250201', '示知報告規章', Category.REGULATIONS, '品格系列', '1DQwl2vBspWVvss4bI_8jblDjPAm9-C7s4T9jGPgdteE', '建立員工主動揭露潛在利益衝突或違規事項之通報機制。'),
  createRealItem('reg_char_02', '20250201', '品格梯度階層規章', Category.REGULATIONS, '品格系列', '1fdNprYV3AAqPJ5Lb-DgroRNose8N1vzOpoT1tqXbUMg', '定義不同品格行為表現之層級，作為人員評價與輔導之參考。'),
  createRealItem('reg_char_03', '20240418', '狀況公式', Category.REGULATIONS, '品格系列', '1n3NZnFDRYbCKX2HdfmFNzyDXt0uiSi2OUnE9iaBjAN4', '提供分析個人或組織運作狀況之評估公式，協助判斷當前處境。'),
  createRealItem('reg_char_04', '20240422', '如何清字', Category.REGULATIONS, '品格系列', '1l_y605Cbgb5ov2dR660sHLWi4TMrZK7QuprJqMeqHyk', '指導同仁在閱讀規章或學習時，遇到不理解詞彙之查證與釐清方法。'),
  createRealItem('reg_char_05', '20260115', '多事資料', Category.REGULATIONS, '品格系列', '10Nt-wP8WNBX80ZcLmna7eodAo5J9p-0V97Jvg4wJgZw', '整理常見之行政干擾或無效作業案例，提醒同仁避免陷入「多事」狀態。'),
  createRealItem('reg_char_06', '20240627', '阻止口頭技術規章', Category.REGULATIONS, '品格系列', '1GjFhHPYZcbLptKCphDnFzevhC5n0tTmuZU6bYrdPS04', '強調書面溝通重要性，規範避免僅依賴口頭傳達重要事項之原則。'),
  createRealItem('reg_char_07', '20240905', '生存與動機', Category.REGULATIONS, '品格系列', '1_krjuq4XBAViuTjQM55EgW51TwJ0bks06uyBu6lvg3Q', '探討員工工作之內在驅動力與生存目標，激發正向工作態度。'),
  createRealItem('reg_char_08', '20240905', '快速流動行動週期與品格', Category.REGULATIONS, '品格系列', '1S5dxCdUybg45vQMCQ6t5QJn0xCbH98dwPdnu6Grc8iY', '說明高效率工作流程與個人品格紀律之關聯性，提升執行力。'),
  createRealItem('reg_char_09', '20241204', '辦公室戀愛管理規章', Category.REGULATIONS, '品格系列', '1T6yOfQ3vPctMfPnPXr7vr0B1wQOiYOY5czlbEO48KQ8', '規範辦公室戀情之申報原則與迴避條款，維護公私分明之職場環境。'),
  createRealItem('reg_char_10', '20250613', '檢視職員的必要性', Category.REGULATIONS, '品格系列', '1FEuce0ZZtDbDjs9LdDljIzl1p8RT1Qtcqfx9lVAEgmQ', '建立定期審視人力編制與職位價值之評估機制，優化人力資源配置。'),
];

export const FLOWCHARTS_DATA: DocumentItem[] = [
  createRealItem('flow_01_01', '20240905', '出差申請粒子流程表', Category.FLOWCHARTS, '一部門', '1TO1GRS2AiGpBUAlfqA02v4I5xfMln3Z7ZACk07ef1II', '圖解員工出差申請之各站點簽核順序與需檢附文件。'),
  createRealItem('flow_01_02', '20260115', '離職流程表(自請離職版)', Category.FLOWCHARTS, '一部門', '1yKxLUiTrSKajfDJi4ThT_bUHPiE3T7JRfAkToR8hmus', '詳列員工主動請辭時，從提出申請到完成離職手續之標準步驟。'),
  createRealItem('flow_01_03', '20260115', '離職流程表(資遣/強制退休版)', Category.FLOWCHARTS, '一部門', '1pVVU7deYNCG1d34O1fVi8Qj5bWb5m0XbK3tV9yf_bkE', '圖解公司資遣或強制退休員工時之法定程序與內部處理流程。'),
  createRealItem('flow_01_04', '20260115', '加速員30天挑戰賽流程表', Category.FLOWCHARTS, '一部門', '1si9vhUH0hiCji_n4Wipc5cFImmFr6Bhd3yqqydtW3kA', '新進人員試用期30天內之任務挑戰與考核檢視流程。'),
  createRealItem('flow_01_05', '20241023', '薪資發放粒子流程表', Category.FLOWCHARTS, '一部門', '1A7gUZfBoFCOIG05gK5n4e9aCaAArmaLH', '說明每月薪資計算、審核、覆核到銀行撥款之完整作業流。'),
  createRealItem('flow_01_06', '20241121', '請假粒子流程表', Category.FLOWCHARTS, '一部門', '1A7gUZfBoFCOIG05gK5n4e9aCaAArmaLH', '圖解各類請假單之申請路徑與核決權限關卡。'),
  createRealItem('flow_02_01', '20250716', '投資人投資粒子流程表', Category.FLOWCHARTS, '二部門', '1osLdqtDlozKHgtQSlnJ54p17yiqXWH277jE3g6AJ6oY', '視覺化呈現投資人從諮詢、評估到確認投資之業務推進步驟。'),
  createRealItem('flow_02_02', '20250731', '投資人退資粒子流程表', Category.FLOWCHARTS, '二部門', '1G7ydw_fUQVtqOnERpv6YGF0BVr5QSHyLP-IfpYSngTw', '圖解投資人申請退資時，內部審核與資金調度之處理流程。'),
  createRealItem('flow_03_01', '20240924', '採購單流程表', Category.FLOWCHARTS, '三部門', '1OfZqaBb1Qtf70nP294GgAm9wlz_2TKmQ28MubXyvwQo', '說明請購、詢價、比價、下單到驗收付款之標準採購循環。'),
  createRealItem('flow_03_02', '20240829', '客戶清償流程表', Category.FLOWCHARTS, '三部門', '1Aj0ywbHU1yEmETEThFRCw0g7vwA8ZMUpOwzUmr-uB3U', '圖解客戶結清借款時，塗銷抵押權與歸還證明文件之作業程序。'),
  createRealItem('flow_03_03', '20240912', '財務計畫粒子流程表', Category.FLOWCHARTS, '三部門', '14g1tBbm0y3CcPher_leU-l4vKxGqha_LMLt4bT0H3ps', '呈現財務預算編列、執行監控與差異分析之循環管理流程。'),
  createRealItem('flow_03_04', '20240816', '案件催收流程表', Category.FLOWCHARTS, '三部門', '18tiSDDb__ThxiY8Db8AjCAtOZPSKhcSFmDyVOxPmbxA', '依據逾期天數劃分之各階段催收行動與法律程序圖。'),
  createRealItem('flow_04_01', '20241029', '案件代償流程表', Category.FLOWCHARTS, '四部門', '1lfRdOaJCPXihBizer5SsMYin8Ia_yYmkiwK6NzjyHe8', '說明代償他行借款案件之照會、撥款與設定塗銷流程。'),
  createRealItem('flow_04_02', '20241114', '案件對保撥款流程表', Category.FLOWCHARTS, '四部門', '1W3SvKNV9c9oSKrg0gH_qbx5mEIkhlsOaBSLtOUNA8zE', '詳列核貸後，與客戶簽約對保、設定抵押到最終撥款之關鍵步驟。'),
  createRealItem('flow_07_01', '20250410', '合約簽立粒子流程表', Category.FLOWCHARTS, '七部門', '1h6lNL7Ndd3njY11bm7f6AT5NmN7244EFdUXOk73Zjo4', '圖解一般商務合約之擬稿、法務審閱、用印申請到歸檔流程。'),
  createRealItem('flow_07_02', '20251111', '發布審核粒子流程表', Category.FLOWCHARTS, '七部門', '1LxdbMT10tslZIKkA92RepntSr8qcAptatr5yUGjn1nU', '說明對外公告或行銷素材發布前之多層級審核路徑。'),
  createRealItem('flow_07_03', '20260129', '帳號異動粒子流程表', Category.FLOWCHARTS, '七部門', '1LlcuE1meUvzEJNTiKynlAh94YexcmKq0Aeru9EmQa_8', '呈現員工到離職或職務異動時，系統權限開通與調整之處理流程。'),
];

export const FORMS_DATA: DocumentItem[] = [
  // 人事相關 (HR)
  createFormItem('fm_hr_01', '招聘需求單', Category.FORMS, '人事相關', '1chwykCKL08v2k8QzlTZqniP37TUUIl52', '各部門申請增補人力時使用，需詳細填寫職缺條件與需求原因。'),
  createFormItem('fm_hr_02', '溝通單', Category.FORMS, '人事相關', '1jwIEgdwQvwUYsjSUlEqRkOC8e0WynBUA', '內部跨部門正式溝通或重要事項傳達使用之標準表單。'),
  createFormItem('fm_hr_03', '遵從報告', Category.FORMS, '人事相關', '1ZD-A5xPpkrGIEP6oxuKGnYkjJkqCbpoJ', '員工確認已閱讀並理解特定規章或命令時簽署之文件。'),
  createFormItem('fm_hr_04', '示知報告', Category.FORMS, '人事相關', '11R39D2Bd_5UPdnJxbSw7CHunIdsUnDWu', '員工主動呈報異常狀況、利益衝突或需上級知悉事項之報告書。'),
  createFormItem('fm_hr_05', 'CSW', Category.FORMS, '人事相關', '1yM4C22M7ErtO0hwMLC9Nl9cky6HiCwYa', '完成工作(Completed Staff Work)呈核單，用於提案或建議方案之審核。'),
  createFormItem('fm_hr_06', '職務說明', Category.FORMS, '人事相關', '1DeQfGr3CFfz9IIdu_VDDXdfDaGavtcj3', '詳細記載特定職位之工作內容、權責範圍與績效指標之說明書。'),
  createFormItem('fm_hr_07', '職務移轉兩週工作測試', Category.FORMS, '人事相關', '19_ufwOIANpPWNdFjg4h6NWRE11IZtJvI', '職務交接期間，用於檢核接任者是否已具備獨立作業能力之測試表。'),
  createFormItem('fm_hr_08', '加速員30天挑戰賽任務清單', Category.FORMS, '人事相關', '1r5un0pHsIkkKPgGKTX_0MEXC97vpg2Q4', '新進人員試用期間需完成之學習任務與階段性目標檢核表。'),
  createFormItem('fm_hr_09', '主管推薦函(通過試用期)', Category.FORMS, '人事相關', '1RCtF8JUVlgAAnYyPdgM_wios_xmQcQph734hH_MMFrY', '主管評估新進人員試用期表現，建議是否正式任用之推薦表單。'),
  createFormItem('fm_hr_10', '職員晉升-主管推薦函', Category.FORMS, '人事相關', '1kF5A-z1UIBtMTJQcgFuHtiA9NlsbX32a', '部門主管推薦部屬晉升職級時填寫之評估與說明文件。'),
  createFormItem('fm_hr_11', '職員晉升-自我推薦函', Category.FORMS, '人事相關', '1oYX__cOc5ycyhrfLwP7KSwmvIpL2O8nx', '員工自認符合晉升資格時，主動提出申請並陳述績效貢獻之表格。'),
  createFormItem('fm_hr_12', '部門主管-終止契約訪談表', Category.FORMS, '人事相關', '1su7ELrkeOIRr7S9QxzYS3v8597yPQCO4', '主管與離職員工進行面談之記錄表，用於了解離職原因與收集反饋。'),
  createFormItem('fm_hr_13', '離職移轉專案及職位清單', Category.FORMS, '人事相關', '1cj7yBzIk1qcUvU4OOX9BbtLE85vc2fFJ', '離職人員需列出經手之未結案專案與待辦事項清單，確保交接無遺漏。'),

  // 公關相關 (PR)
  createFormItem('fm_pr_01', '活動紀錄素材需求表', Category.FORMS, '公關相關', '1pi3k1dCCAPDp-UzEy6wxnJXACH0Z8raU_aRrmxwNxu4', '申請活動攝影、錄影或其他紀錄需求時填寫之表單。'),
  createFormItem('fm_pr_02', '公關需求表', Category.FORMS, '公關相關', '1KLIjDbDxfOQljzTkPmpzD8Dh9vCBTDv9iQYzn8l39q4', '各部門申請對外公關發布、媒體聯繫或活動支援之需求申請單。'),

  // 文書檔案 (Documents)
  createFormItem('fm_doc_01', '一般多孔夾封面命名格式', Category.FORMS, '文書檔案', '1GxWjYNoqOXVxo0j65Qe2ltqN6A1En_we', '統一規範公司文件檔案夾脊與封面之標示格式範本。'),
  createFormItem('fm_doc_02', '內頁標籤格式', Category.FORMS, '文書檔案', '1kOWV7in-8fnjHCbjIYzd8hNUrabuN37S', '檔案夾內頁分隔標籤之標準列印格式，方便資料分類索引。'),
  createFormItem('fm_doc_03', '勾選式目錄格式', Category.FORMS, '文書檔案', '12XtAcbalPwVwNUl6F95G0EKtbPbsrvHH', '用於檔案卷宗首頁，方便快速檢視與勾選內容物之目錄範本。'),
  createFormItem('fm_doc_04', '結案標籤格式', Category.FORMS, '文書檔案', '1xhSOS_syFtsDOGfFzAZPoCo3onUYi-dz', '專案或案件結束歸檔時，用於封箱或歸檔夾之標示格式。'),
  createFormItem('fm_doc_05', '融鎰多孔夾封面命名格式', Category.FORMS, '文書檔案', '1D5a0yClbA4CP53BrWFvTgph4sEUj3jPK', '融鎰專用之檔案夾封面標準格式範本。'),

  // 印鑑相關 (Seals)
  createFormItem('fm_seal_01', '印鑑刻製申請單', Category.FORMS, '印鑑相關', '1o1FYHaDyp0hg-e8sTuer0vdKAqvJdEGnQaTCatj1POE', '申請新刻公司章、部門章或職名章時之核准申請單。'),
  createFormItem('fm_seal_02', '印鑑遺失/報銷申請單', Category.FORMS, '印鑑相關', '1f7aIZMYtX-S5ZNcJd5XoR8Z3NMtCFlm8', '印鑑遺失掛失或磨損報廢時需填寫之管理紀錄單。'),
  createFormItem('fm_seal_03', '用印申請CSW', Category.FORMS, '印鑑相關', '1aU1da1CnhxbQAO_BUCgWdaAZM029mVb9', '需使用公司大小章或正式印鑑時，需隨附此CSW進行審核。'),

  // 財務相關 (Finance)
  createFormItem('fm_fin_01', '資金申請單', Category.FORMS, '財務相關', '1UdVNHe4b4dT9XJkyX0kUUT_OXnPFmacc', '各部門申請預算外支出或大額資金動支時之專用申請表。'),

  // 管理相關 (Management)
  createFormItem('fm_mgmt_01', '任命狀', Category.FORMS, '管理相關', '1uAj3EA2oU9mrsOFcWIbm2vzakTKt80rsxO1k2Jx5bkQ', '正式發布人員職務任命或升遷時使用之公告格式。'),
  createFormItem('fm_mgmt_02', '衝突風險通報單-CSW', Category.FORMS, '管理相關', '1ZLX-0uvKyv5rBBX6INbmHPOOksK9G8X1', '通報潛在商務衝突或高風險事件時使用之標準化報告格式。'),

  // 穩盈相關 (WenYing)
  createFormItem('fm_wy_01', '顧問服務完成確認單', Category.FORMS, '穩盈相關', '1u3OXM2cAV829ZROE2y-wDK6s3X-V8PkL', '顧問服務結案時，請客戶簽署確認服務內容已交付之確認單。'),
];

export const ALL_DOCUMENTS = [
  ...REGULATIONS_DATA,
  ...FLOWCHARTS_DATA,
  ...FORMS_DATA
];

// Sub-category groupings for display order
export const REGULATION_GROUPS = ['組織系列', '技術系列', '財務系列', '行銷系列', '品格系列'];
export const FLOWCHART_GROUPS = ['一部門', '二部門', '三部門', '四部門', '五部門', '六部門', '七部門'];
export const FORM_GROUPS = ['人事相關', '公關相關', '文書檔案', '印鑑相關', '財務相關', '管理相關', '穩盈相關'];