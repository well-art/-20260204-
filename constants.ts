import { Category, DocumentItem } from './types';

// Helper to generate mock items quickly (to be replaced with real data later)
const createMockItem = (
  id: string, 
  title: string, 
  category: Category, 
  subCategory: string
): DocumentItem => ({
  id,
  title,
  category,
  subCategory,
  date: '2023-10-27', // Placeholder date
  driveId: '1-placeholder-id', // Placeholder ID - replace with real Google Drive IDs
  description: '文件說明內容...'
});

const createRealItem = (
  id: string,
  dateRaw: string,
  title: string,
  category: Category,
  subCategory: string,
  driveId: string = 'pending_id'
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
    description: ''
  };
};

const createFormItem = (
  id: string,
  title: string,
  category: Category,
  subCategory: string,
  driveId: string
): DocumentItem => ({
  id,
  title,
  category,
  subCategory,
  date: '', // No date for forms
  driveId,
  description: ''
});

export const REGULATIONS_DATA: DocumentItem[] = [
  // 組織系列 (Organization Series)
  createRealItem('reg_org_01', '20231207', '工作規則', Category.REGULATIONS, '組織系列', '162Ypn3-kp7ENhSdJ2KByYrH3zWxyPCdl'), // PDF
  createRealItem('reg_org_02', '20250201', '目標與目的規章', Category.REGULATIONS, '組織系列', '1eTqS3bMABIexMjFmjighRF-932K-iwYtxGCuxTqi7SA'),
  createRealItem('reg_org_03', '20250201', '公司歷史規章', Category.REGULATIONS, '組織系列', '1sqckdA0LorOmgAPLTPVcd5IX9glpY6JrCnDpLE011BU'),
  createRealItem('reg_org_04', '20250201', '最終有價值產品規章', Category.REGULATIONS, '組織系列', '1LkRpu50VcovwOldcXcVf62ZjN-Vc0ghpha82SM2XSx8'),
  createRealItem('reg_org_05', '20250201', '組織圖使用規章', Category.REGULATIONS, '組織系列', '1Uo1MSRM_Wk60sPmbzSRisHozcB5aEYn6y0C3sE4XmdY'),
  createRealItem('reg_org_06', '20250201', '各課的職責', Category.REGULATIONS, '組織系列', '1ku0Ej2LLShAs8LZzGINfrTEOmOVT2U422_cU4DoYAsQ'),
  createRealItem('reg_org_07', '20250201', '每週職員會議規章', Category.REGULATIONS, '組織系列', '1ohWmuWllovNUWZ-n_q9jOXY2-cUC-ACAUQJ8sEyCXZQ'),
  createRealItem('reg_org_08', '20250201', '書面溝通規章', Category.REGULATIONS, '組織系列', '1iaUQH5ld4MwWAbUg7Cnaw9EXpm6yCSTqj-T9XUUzpX0'),
  createRealItem('reg_org_09', '20250201', '命令規章', Category.REGULATIONS, '組織系列', '1Tc1y9xmOER4fa6lJ0JR5YHlGpYI13RDrb585Xi4Mg5w'),
  createRealItem('reg_org_10', '20260115', 'CSW規章', Category.REGULATIONS, '組織系列', '1lU7gyS4a1zoKhOJA4_WUqelVHQ0pr2fiFUdxGPuLrI8'),
  createRealItem('reg_org_11', '20250201', '工作資料夾規章', Category.REGULATIONS, '組織系列', '1LL5FQQwiqjJf8MaXXUwUPBhqEmDSmhfKm95CcyEpDPI'),
  createRealItem('reg_org_12', '20250201', '工作資料夾檢視規章', Category.REGULATIONS, '組織系列', '1Z-A26U00KEfRUfp2pGWUmHVkU1N_lElXT3yCT790jZw'),
  createRealItem('reg_org_13', '20250201', '如何撰寫規章的規章', Category.REGULATIONS, '組織系列', '1c3sAQv1uzgKfm3w3jPlLBdlzXlOfv3SIBVPxLRursIo'),
  createRealItem('reg_org_14', '20250201', '統計曲線規章', Category.REGULATIONS, '組織系列', '1qNhw6b_9OM3q-HSjuZbNsK6svpiwFMRRyd0TGsNTfEU'),
  createRealItem('reg_org_15', '20250206', '職員出勤規章', Category.REGULATIONS, '組織系列', '17wdy8YJ-IeBDUjsmLi0pSYYF572BPvH3_WRaHUL3ctM'),
  createRealItem('reg_org_16', '20250120', '如何修改公司管理工具規章', Category.REGULATIONS, '組織系列', '1nzs_RmDkEtFRlzozNbHthElDOJTH1H9ulqD33Gtj54g'),
  createRealItem('reg_org_17', '20250201', '辦公室用品操作與管理規章', Category.REGULATIONS, '組織系列', '1INOPF34RMO_gUh5gegOBNSwK101r9Z78e17Er8E7T9Y'),
  createRealItem('reg_org_18', '20240614', '印鑑與負責人簽名管理規章', Category.REGULATIONS, '組織系列', '1R7dp1eWYWbbhM4SoHly1dZPdHs0pShHL3OWjMVGcuRI'),
  createRealItem('reg_org_19', '20240418', '協調手冊', Category.REGULATIONS, '組織系列', '1NfBiBdyS7Pf4mlhbsYuZrleas88Ga_t-Sbw4OVfyT8E'),
  createRealItem('reg_org_20', '20240422', '如何移轉職責', Category.REGULATIONS, '組織系列', '11iA-peENwzDCVinKlT_FMuEjD6hzpjyY9qPAY9XTNtw'),
  createRealItem('reg_org_21', '20240422', '如何開始在新職位上運作', Category.REGULATIONS, '組織系列', '10Yc-fZfdW_CtTuARuPov0NVvM95YNSTDZ_eVfuYb3-o'),
  createRealItem('reg_org_22', '20240821', '企業主10年戰略方針', Category.REGULATIONS, '組織系列', '1FkCVnLRd0mhCGDsbFaEvoyVZXSDn7NzXwCBhvw7Miss'),
  createRealItem('reg_org_23', '20240821', '管理等級表(2025年版)', Category.REGULATIONS, '組織系列', '1_IRQ1fhBttZnYvCnnwtXELGCFAaOYhKrVQFhxdewc3I'),
  createRealItem('reg_org_24', '20240422', '個人職務說明培訓', Category.REGULATIONS, '組織系列', '1JmFMkUXkYe2k3SRL0tNG_IbBl5KtwOr-IJZy48-q7RA'),
  createRealItem('reg_org_25', '20240422', '主管的責任', Category.REGULATIONS, '組織系列', '1eQbbZOSe61-zxRrsyPoUQU9ygNIQX6EgOtcADgSOM4A'),
  createRealItem('reg_org_26', '20240502', '腦力激盪', Category.REGULATIONS, '組織系列', '1zDHVImzFwPgxILJje9qjSQFZu5OiQ_WtHlWNFOuQ0PM'),
  createRealItem('reg_org_27', '20240513', '應付與組織規章', Category.REGULATIONS, '組織系列', '1Ec6bN0ePj2iLtJNicWaimW71AeynIfgT7REUyV5bzJw'),
  createRealItem('reg_org_28', '20250106', '年度計畫規章', Category.REGULATIONS, '組織系列', '1LSoCk9inoTTUC4BA-yXCss6HiU9mXwapfAOXkzi-0Gg'),
  createRealItem('reg_org_29', '20241114', '集團行事曆規章', Category.REGULATIONS, '組織系列', '1VC2NhVz4pfi0dMLiIxrIWkhx2iWLH7BReCfDRoY2xto'),
  createRealItem('reg_org_30', '20250306', '職員終止契約與職務移轉規章', Category.REGULATIONS, '組織系列', '1O43I83txCawPkKjiD0nOecEbSgrGWtnmoucxmnFq6nM'),
  createRealItem('reg_org_31', '20240715', '職務說明 公版', Category.REGULATIONS, '組織系列', '13y4I-WmtBJZM7Gf2-5Uds0LqfwQYP16n'),
  createRealItem('reg_org_32', '20241114', '職務職責與運行規章', Category.REGULATIONS, '組織系列', '11KSGIeCLfk97jXwmP09DMkhhl0z2O9fwxBoTtjmj54s'),
  createRealItem('reg_org_33', '20240815', '出差費用管理辦法規章', Category.REGULATIONS, '組織系列', '1DiCgOu38eg1RpdBXQjUY2qr6RcWn9Uw0ZJesmVnzWCQ'),
  createRealItem('reg_org_34', '20240715', '職務移轉規章附件', Category.REGULATIONS, '組織系列', '1-yTTqGmEaMeq_hVA5wvtuCKfa5hj6cYiBLB-FpGytjA'),
  createRealItem('reg_org_35', '20240715', '職務移轉規章', Category.REGULATIONS, '組織系列', '1wqSOXXp6pmjP5xH8Bq5dzEbCoGhV2CqFeaPTyfBZMhY'),
  createRealItem('reg_org_36', '20250206', '投資客戶資料管理規則', Category.REGULATIONS, '組織系列', '13NNiO_cmzUF2T3egu8phmUijc-lFKASpeNjv-4pjobg'),
  createRealItem('reg_org_37', '20250206', '戰略與戰術會議規章', Category.REGULATIONS, '組織系列', '1wMquAiR4Sso1svSW4yub_Bw1XjaZXe47JubtgdjrtgM'),
  createRealItem('reg_org_38', '20250227', '企業文件審核規範', Category.REGULATIONS, '組織系列', '14rlMJ89loSK-S_wFWkkKkM_xXc2TRKETlzKNDnohRew'),
  createRealItem('reg_org_39', '20250327', '簽約獎金政策規章', Category.REGULATIONS, '組織系列', '18D1Dp3E3zfajABxt8SenCrOY_in4ZWBziJQLU2mwbPs'),
  createRealItem('reg_org_40', '20250327', '專案管理規章', Category.REGULATIONS, '組織系列', '1eSRecDt0eCfGVVz0ggKvq35KBXEOsNRHmuFahvH9RXg'),
  createRealItem('reg_org_41', '20250416', '合約規章', Category.REGULATIONS, '組織系列', '1GNgY8kTjzZ4VQoVu6Nblo2luo9z3iZfYr9znVGpX1mg'),
  createRealItem('reg_org_42', '20250418', '年度目標展開與執行流程規章', Category.REGULATIONS, '組織系列', '1zwgQyS4rba3aayyNZ8XQvM2wUQa6z1csKlTcozGi_bM'),
  createRealItem('reg_org_43', '20250523', '人力招募與任用', Category.REGULATIONS, '組織系列', '13aSUbNn7gz1E-Gcn0Mlp5Tt8uTd6ukdWCXaZPNhE54E'),
  createRealItem('reg_org_44', '20250613', '職員內部公關', Category.REGULATIONS, '組織系列', '1vIk5lgpCBvVqkjR299-uq0mglQ4L_JFMVb8B96p1ljc'),
  createRealItem('reg_org_45', '20250613', '感謝小卡', Category.REGULATIONS, '組織系列', '1FAIpQLSeZvkR5M8M31ryjYwSzj5f3tRnNFf17GVcmsqHo0VTDtufc2w'), // Google Form
  createRealItem('reg_org_46', '20250613', '穩盈策略顧問股份有限公司 行政管理等級表', Category.REGULATIONS, '組織系列', '14ekkF3a2lNY5VGtdep5u6v4-usQ-lkeePc4txia_nHY'),
  createRealItem('reg_org_47', '20250620', '企業宣傳與教育發布規範', Category.REGULATIONS, '組織系列', '1lBqwNgG_fX2mlANTlYeDgITpHOxWD8sVgv43t979nWk'),
  createRealItem('reg_org_48', '20260115', '職災處理辦法', Category.REGULATIONS, '組織系列', '1vFL9JKH89MYZxtRJl7wOz88-I-Mna1-30y6inRJ9FIo'),
  createRealItem('reg_org_49', '20250620', '文書檔案管理', Category.REGULATIONS, '組織系列', '1Wq7q3OQp-0LqPYOFmoUvmct5vyMiY2qd'),
  createRealItem('reg_org_50', '20260115', '文件審查規章', Category.REGULATIONS, '組織系列', '13BVLST5ywds1CTy91HU2498WJ2D1j9NRipKS2pJysRs'),
  createRealItem('reg_org_51', '20250731', '會議規章', Category.REGULATIONS, '組織系列', '1lr1oE7VFL8Csr5bWv00aC_-aPI-e9UWYz3PuGhIFJOI'),
  createRealItem('reg_org_52', '20250905', '流程圖製作與審核', Category.REGULATIONS, '組織系列', '1zSHcN0Ticx7o375NBkU3M4bdYqv9wA2ge5jn8BSKWWU'),
  createRealItem('reg_org_53', '20251113', '法律案件責任與協作管理', Category.REGULATIONS, '組織系列', '11oKV6mLijdVG5L9cNJdi0wmhce3MKhLp49s5DB05XOQ'),
  createRealItem('reg_org_54', '20251120', '獎金與激勵辦法', Category.REGULATIONS, '組織系列', '1LaZNZfvdwmx3SJicbm8l22j-UHfGJPG7pZzUeEcgVz0'),
  createRealItem('reg_org_55', '20251107', '績效管理與考核辦法', Category.REGULATIONS, '組織系列', '1o8f_penur56ymLaKpJke3cYBGrcjqxB6KDjFSI7q8NE'),
  createRealItem('reg_org_56', '20251107', '薪酬結構辦法', Category.REGULATIONS, '組織系列', '1qJfjUte_VEVqwMjIYi1vA9Lm_8sRYOD34zBiwpaRUgg'),
  createRealItem('reg_org_57', '20251114', '職員培訓辦法', Category.REGULATIONS, '組織系列', '1I-RB7rBn99vvmQMNyh9BVevA13UW3po4LMU6iGZ5Wno'),
  createRealItem('reg_org_58', '20251114', '職員發展與晉升辦法', Category.REGULATIONS, '組織系列', '1NnMTD1e8xLOemtLwQzqVJhkHIm1FX9dvnBPChEGfHAo'),
  createRealItem('reg_org_59', '20260116', '融資經營品格政策', Category.REGULATIONS, '組織系列', '1s2fhoKvgU2fxt7hkKaNjuuhPHf76ixVovWsgrnRCQQQ'),
  createRealItem('reg_org_60', '20260122', '商務衝突與人員安全防護管理辦法', Category.REGULATIONS, '組織系列', '1ndW7o_SL5jDa2r2l7vzLgoRwnxbOmWy6H53ATZtJV1M'),
  createRealItem('reg_org_61', '20260129', '帳號管理規章', Category.REGULATIONS, '組織系列', '1UWPkkwxgpC45yNa6zgAW8kDEZNzCt_g-VdUpxOLyJAE'),

  // 技術系列 (Technical Series)
  createRealItem('reg_tech_01', '20241205', '公佈欄發布規章', Category.REGULATIONS, '技術系列', '1-xUgpXYp5hVb4IYzvmq4KJtxyOwa9Z00YBytMvqPi54'),
  createRealItem('reg_tech_02', '20240703', '應收帳款分期客戶合約到期展期', Category.REGULATIONS, '技術系列', '1Ksv32RKYyyloO12G1adtfgZ7A3WQTTNzc_olZAXExLs'),
  createRealItem('reg_tech_03', '20240902', '帳務系統操作手冊', Category.REGULATIONS, '技術系列', '1xMCeaP-ayd9O6AGueHyTMRS0bbJGvPGLZmz4JNoJslI'),
  createRealItem('reg_tech_04', '20241217', '不動產鑑價作業規章', Category.REGULATIONS, '技術系列', '1_82d8VjrequcHkIJKNryNNBlOTBYp7Cs9O3ReyChSPU'),
  createRealItem('reg_tech_05', '20241114', '財富奧秘之旅玩家指南規章', Category.REGULATIONS, '技術系列', '15S_ZiwellhyuMvi_6ZqkU9UIhjHYvx_beaeY_5P4fj8'),
  createRealItem('reg_tech_06', '20240520', '銀行金鑰管理規章', Category.REGULATIONS, '技術系列', '1meaTo3hZrCpbVr3utXUu_2G_WI-fAYElqq2HaYv2AKE'),
  createRealItem('reg_tech_07', '20250730', '客戶借款違約金減免規範', Category.REGULATIONS, '技術系列', '1sENv03QyGSyUQ33ZideG2gqfgJNnkYKEFKxUKO0Gxtk'),
  createRealItem('reg_tech_08', '20260115', '案件授信準則', Category.REGULATIONS, '技術系列', '1XBWiowUJJcEzECwgKDV3E0kxZ8rZO7Qphd2EG5hBKqE'),
  createRealItem('reg_tech_09', '20240320', '案件催收壓力等級表', Category.REGULATIONS, '技術系列', '1SMH-AgOZAKoTICJj9OF-j6mPeLBx67lJ'),
  createRealItem('reg_tech_10', '20250711', '個案合約審核及管理辦法', Category.REGULATIONS, '技術系列', '1LKFe8k9ykFYdW-FKa1cNt2faqG8zczUrOFuNf7EOgZg'),
  createRealItem('reg_tech_11', '20250711', '不動產擔保提供報酬規範', Category.REGULATIONS, '技術系列', '1TB7iIazCdSpNTQ9xlbU9l4Owa1uYy0R9ZVL9m8aP52k'),
  createRealItem('reg_tech_12', '20250716', '案件移轉辦法', Category.REGULATIONS, '技術系列', '1ZIQ6u0c8melyW2qfIcfQjhNtrHr7RjCqcoBfOoij3HI'),
  createRealItem('reg_tech_13', '20250731', '投資人會員分級規章', Category.REGULATIONS, '技術系列', '1SinDUT_rduYlov2kbs32mhf3V6H-Ra1VcPgvRov1rkE'),
  createRealItem('reg_tech_14', '20250814', '投資人投資流程規章', Category.REGULATIONS, '技術系列', '1Mwde1iuceOSp-vRpXuGN5Sz8TwgbQ5rLJLEexVMSf8Y'),
  createRealItem('reg_tech_15', '20250814', '投資人退資流程規章', Category.REGULATIONS, '技術系列', '1XuOBsViU9XRXkdrWlZm7P9QDu2fY_DxD1brEmnJL5cg'),
  createRealItem('reg_tech_16', '20250905', '投資通路管理規範', Category.REGULATIONS, '技術系列', '1Es4kjY_Ka3feA-3Um3WeHkTLtn0AqoqoQ-drOkArrII'),
  createRealItem('reg_tech_17', '20251017', '客戶逾期支付利息管理與減免辦法', Category.REGULATIONS, '技術系列', '1v-PUTO8GOL4Xnca8bY2bGkPZU5ezo4Dd7N-1SWF9l2Q'),
  createRealItem('reg_tech_18', '20260130', '募資業務獎金分潤規範', Category.REGULATIONS, '技術系列', '1uXMmbKBBoABEJ47d0X2hzdLtS6ScuUbglD0U36a-SqI'),

  // 財務系列 (Financial Series)
  createRealItem('reg_fin_01', '20250206', '財務計畫3.0規章', Category.REGULATIONS, '財務系列', '1d1Y96RYF7BVznr67jlPZeK-G7l0NoLJCmJzS48js-uU'),
  createRealItem('reg_fin_02', '20241225', '集團內部借貸規則', Category.REGULATIONS, '財務系列', '1Y4Z7HRLAmPXZst3Bzt3ZFLpgszUcUqFQJyBoN9c_fNE'),
  createRealItem('reg_fin_03', '20250227', '借款案件報價與獎勵規章', Category.REGULATIONS, '財務系列', '1ZvVhP_00-W_KpbqmSRcZybi7TMb49YpFAHB7aPK4KnA'),
  createRealItem('reg_fin_04', '20260129', '財務及會計規章', Category.REGULATIONS, '財務系列', '1alDWigBxatL-w9pdk_OgBeRI7IH5uwqwWeiRbliqOD8'),
  createRealItem('reg_fin_05', '20260129', '稅務計畫', Category.REGULATIONS, '財務系列', '1LJcLSJzwS1s79z6gkZgWftZjVMKzBZcrAoM6mGC1QJQ'),
  createRealItem('reg_fin_06', '20260129', '帳務計畫', Category.REGULATIONS, '財務系列', '1SQrsNpjLHLD0RPP3CWc7kgeubGM_X-pn5XOlcYS_Agg'),

  // 行銷系列 (Marketing Series)
  createRealItem('reg_mkt_01', '20250206', '行銷外包規定', Category.REGULATIONS, '行銷系列', '1HanQAEhbq2AwcUQ6si-zVPObSR00Hgxf-8vQGmJC8wA'),

  // 品格系列 (Character/Ethics Series)
  createRealItem('reg_char_01', '20250201', '示知報告規章', Category.REGULATIONS, '品格系列', '1DQwl2vBspWVvss4bI_8jblDjPAm9-C7s4T9jGPgdteE'),
  createRealItem('reg_char_02', '20250201', '品格梯度階層規章', Category.REGULATIONS, '品格系列', '1fdNprYV3AAqPJ5Lb-DgroRNose8N1vzOpoT1tqXbUMg'),
  createRealItem('reg_char_03', '20240418', '狀況公式', Category.REGULATIONS, '品格系列', '1n3NZnFDRYbCKX2HdfmFNzyDXt0uiSi2OUnE9iaBjAN4'),
  createRealItem('reg_char_04', '20240422', '如何清字', Category.REGULATIONS, '品格系列', '1l_y605Cbgb5ov2dR660sHLWi4TMrZK7QuprJqMeqHyk'),
  createRealItem('reg_char_05', '20260115', '多事資料', Category.REGULATIONS, '品格系列', '10Nt-wP8WNBX80ZcLmna7eodAo5J9p-0V97Jvg4wJgZw'),
  createRealItem('reg_char_06', '20240627', '阻止口頭技術規章', Category.REGULATIONS, '品格系列', '1GjFhHPYZcbLptKCphDnFzevhC5n0tTmuZU6bYrdPS04'),
  createRealItem('reg_char_07', '20240905', '生存與動機', Category.REGULATIONS, '品格系列', '1_krjuq4XBAViuTjQM55EgW51TwJ0bks06uyBu6lvg3Q'),
  createRealItem('reg_char_08', '20240905', '快速流動行動週期與品格', Category.REGULATIONS, '品格系列', '1S5dxCdUybg45vQMCQ6t5QJn0xCbH98dwPdnu6Grc8iY'),
  createRealItem('reg_char_09', '20241204', '辦公室戀愛管理規章', Category.REGULATIONS, '品格系列', '1T6yOfQ3vPctMfPnPXr7vr0B1wQOiYOY5czlbEO48KQ8'),
  createRealItem('reg_char_10', '20250613', '檢視職員的必要性', Category.REGULATIONS, '品格系列', '1FEuce0ZZtDbDjs9LdDljIzl1p8RT1Qtcqfx9lVAEgmQ'),
];

export const FLOWCHARTS_DATA: DocumentItem[] = [
  createRealItem('flow_01_01', '20240905', '出差申請粒子流程表', Category.FLOWCHARTS, '一部門', '1TO1GRS2AiGpBUAlfqA02v4I5xfMln3Z7ZACk07ef1II'),
  createRealItem('flow_01_02', '20260115', '離職流程表(自請離職版)', Category.FLOWCHARTS, '一部門', '1yKxLUiTrSKajfDJi4ThT_bUHPiE3T7JRfAkToR8hmus'),
  createRealItem('flow_01_03', '20260115', '離職流程表(資遣/強制退休版)', Category.FLOWCHARTS, '一部門', '1pVVU7deYNCG1d34O1fVi8Qj5bWb5m0XbK3tV9yf_bkE'),
  createRealItem('flow_01_04', '20260115', '加速員30天挑戰賽流程表', Category.FLOWCHARTS, '一部門', '1si9vhUH0hiCji_n4Wipc5cFImmFr6Bhd3yqqydtW3kA'),
  createRealItem('flow_01_05', '20241023', '薪資發放粒子流程表', Category.FLOWCHARTS, '一部門', '1A7gUZfBoFCOIG05gK5n4e9aCaAArmaLH'),
  createRealItem('flow_01_06', '20241121', '請假粒子流程表', Category.FLOWCHARTS, '一部門', '1A7gUZfBoFCOIG05gK5n4e9aCaAArmaLH'), // User provided same link
  createRealItem('flow_02_01', '20250716', '投資人投資粒子流程表', Category.FLOWCHARTS, '二部門', '1osLdqtDlozKHgtQSlnJ54p17yiqXWH277jE3g6AJ6oY'),
  createRealItem('flow_02_02', '20250731', '投資人退資粒子流程表', Category.FLOWCHARTS, '二部門', '1G7ydw_fUQVtqOnERpv6YGF0BVr5QSHyLP-IfpYSngTw'),
  createRealItem('flow_03_01', '20240924', '採購單流程表', Category.FLOWCHARTS, '三部門', '1OfZqaBb1Qtf70nP294GgAm9wlz_2TKmQ28MubXyvwQo'),
  createRealItem('flow_03_02', '20240829', '客戶清償流程表', Category.FLOWCHARTS, '三部門', '1Aj0ywbHU1yEmETEThFRCw0g7vwA8ZMUpOwzUmr-uB3U'),
  createRealItem('flow_03_03', '20240912', '財務計畫粒子流程表', Category.FLOWCHARTS, '三部門', '14g1tBbm0y3CcPher_leU-l4vKxGqha_LMLt4bT0H3ps'),
  createRealItem('flow_03_04', '20240816', '案件催收流程表', Category.FLOWCHARTS, '三部門', '18tiSDDb__ThxiY8Db8AjCAtOZPSKhcSFmDyVOxPmbxA'),
  createRealItem('flow_04_01', '20241029', '案件代償流程表', Category.FLOWCHARTS, '四部門', '1lfRdOaJCPXihBizer5SsMYin8Ia_yYmkiwK6NzjyHe8'),
  createRealItem('flow_04_02', '20241114', '案件對保撥款流程表', Category.FLOWCHARTS, '四部門', '1W3SvKNV9c9oSKrg0gH_qbx5mEIkhlsOaBSLtOUNA8zE'),
  createRealItem('flow_07_01', '20250410', '合約簽立粒子流程表', Category.FLOWCHARTS, '七部門', '1h6lNL7Ndd3njY11bm7f6AT5NmN7244EFdUXOk73Zjo4'),
  createRealItem('flow_07_02', '20251111', '發布審核粒子流程表', Category.FLOWCHARTS, '七部門', '1LxdbMT10tslZIKkA92RepntSr8qcAptatr5yUGjn1nU'),
  createRealItem('flow_07_03', '20260129', '帳號異動粒子流程表', Category.FLOWCHARTS, '七部門', '1LlcuE1meUvzEJNTiKynlAh94YexcmKq0Aeru9EmQa_8'),
];

export const FORMS_DATA: DocumentItem[] = [
  // 人事相關 (HR)
  createFormItem('fm_hr_01', '招聘需求單', Category.FORMS, '人事相關', '1chwykCKL08v2k8QzlTZqniP37TUUIl52'),
  createFormItem('fm_hr_02', '溝通單', Category.FORMS, '人事相關', '1jwIEgdwQvwUYsjSUlEqRkOC8e0WynBUA'),
  createFormItem('fm_hr_03', '遵從報告', Category.FORMS, '人事相關', '1ZD-A5xPpkrGIEP6oxuKGnYkjJkqCbpoJ'),
  createFormItem('fm_hr_04', '示知報告', Category.FORMS, '人事相關', '11R39D2Bd_5UPdnJxbSw7CHunIdsUnDWu'),
  createFormItem('fm_hr_05', 'CSW', Category.FORMS, '人事相關', '1yM4C22M7ErtO0hwMLC9Nl9cky6HiCwYa'),
  createFormItem('fm_hr_06', '職務說明', Category.FORMS, '人事相關', '1DeQfGr3CFfz9IIdu_VDDXdfDaGavtcj3'),
  createFormItem('fm_hr_07', '職務移轉兩週工作測試', Category.FORMS, '人事相關', '19_ufwOIANpPWNdFjg4h6NWRE11IZtJvI'),
  createFormItem('fm_hr_08', '加速員30天挑戰賽任務清單', Category.FORMS, '人事相關', '1r5un0pHsIkkKPgGKTX_0MEXC97vpg2Q4'),
  createFormItem('fm_hr_09', '主管推薦函(通過試用期)', Category.FORMS, '人事相關', '1RCtF8JUVlgAAnYyPdgM_wios_xmQcQph734hH_MMFrY'),
  createFormItem('fm_hr_10', '職員晉升-主管推薦函', Category.FORMS, '人事相關', '1kF5A-z1UIBtMTJQcgFuHtiA9NlsbX32a'),
  createFormItem('fm_hr_11', '職員晉升-自我推薦函', Category.FORMS, '人事相關', '1oYX__cOc5ycyhrfLwP7KSwmvIpL2O8nx'),
  createFormItem('fm_hr_12', '部門主管-終止契約訪談表', Category.FORMS, '人事相關', '1su7ELrkeOIRr7S9QxzYS3v8597yPQCO4'),
  createFormItem('fm_hr_13', '離職移轉專案及職位清單', Category.FORMS, '人事相關', '1cj7yBzIk1qcUvU4OOX9BbtLE85vc2fFJ'),

  // 公關相關 (PR)
  createFormItem('fm_pr_01', '活動紀錄素材需求表', Category.FORMS, '公關相關', '1pi3k1dCCAPDp-UzEy6wxnJXACH0Z8raU_aRrmxwNxu4'),
  createFormItem('fm_pr_02', '公關需求表', Category.FORMS, '公關相關', '1KLIjDbDxfOQljzTkPmpzD8Dh9vCBTDv9iQYzn8l39q4'),

  // 文書檔案 (Documents)
  createFormItem('fm_doc_01', '一般多孔夾封面命名格式', Category.FORMS, '文書檔案', '1GxWjYNoqOXVxo0j65Qe2ltqN6A1En_we'),
  createFormItem('fm_doc_02', '內頁標籤格式', Category.FORMS, '文書檔案', '1kOWV7in-8fnjHCbjIYzd8hNUrabuN37S'),
  createFormItem('fm_doc_03', '勾選式目錄格式', Category.FORMS, '文書檔案', '12XtAcbalPwVwNUl6F95G0EKtbPbsrvHH'),
  createFormItem('fm_doc_04', '結案標籤格式', Category.FORMS, '文書檔案', '1xhSOS_syFtsDOGfFzAZPoCo3onUYi-dz'),
  createFormItem('fm_doc_05', '融鎰多孔夾封面命名格式', Category.FORMS, '文書檔案', '1D5a0yClbA4CP53BrWFvTgph4sEUj3jPK'),

  // 印鑑相關 (Seals)
  createFormItem('fm_seal_01', '印鑑刻製申請單', Category.FORMS, '印鑑相關', '1o1FYHaDyp0hg-e8sTuer0vdKAqvJdEGnQaTCatj1POE'),
  createFormItem('fm_seal_02', '印鑑遺失/報銷申請單', Category.FORMS, '印鑑相關', '1f7aIZMYtX-S5ZNcJd5XoR8Z3NMtCFlm8'),
  createFormItem('fm_seal_03', '用印申請CSW', Category.FORMS, '印鑑相關', '1aU1da1CnhxbQAO_BUCgWdaAZM029mVb9'),

  // 財務相關 (Finance)
  createFormItem('fm_fin_01', '資金申請單', Category.FORMS, '財務相關', '1UdVNHe4b4dT9XJkyX0kUUT_OXnPFmacc'),

  // 管理相關 (Management)
  createFormItem('fm_mgmt_01', '任命狀', Category.FORMS, '管理相關', '1uAj3EA2oU9mrsOFcWIbm2vzakTKt80rsxO1k2Jx5bkQ'),
  createFormItem('fm_mgmt_02', '衝突風險通報單-CSW', Category.FORMS, '管理相關', '1ZLX-0uvKyv5rBBX6INbmHPOOksK9G8X1'),

  // 穩盈相關 (WenYing)
  createFormItem('fm_wy_01', '顧問服務完成確認單', Category.FORMS, '穩盈相關', '1u3OXM2cAV829ZROE2y-wDK6s3X-V8PkL'),
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