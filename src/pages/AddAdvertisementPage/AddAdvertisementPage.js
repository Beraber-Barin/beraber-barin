import React from "react";
import styles from "./AddAdvertisementPage.module.scss";
import DragDropImageUpload from "../../components/DragDropImageUpload/DragDropImageUpload";
import bigBluePlus from "../../assets/svg/bigBluePlus.svg";
import TagInputField from "../../components/TagInputField/TagInputField";
import { tagList } from "../../assets/sampleData/tagData";
import SelectInput from "../../components/SelectInput/SelectInput";
import { dropdownData } from "../../assets/sampleData/dropdownData";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import Button from "../../components/Button/Button";
import btnStyles from "../../components/Button/Button.module.scss";
const AddAdvertisementPage = () => {
  return (
    <div>
      <h3 className={styles.pageTitle}>Yeni İlan Oluştur</h3>
      <div className={styles.inputFieldWrapper}>
        <div className={styles.gridWrapper}>
          <div className={styles.leftContainer}>
            <div className={styles.fieldWrapper}>
              <h5>Fotoğraf Ekle</h5>
              <div className={styles.dragDropWrapper}>
                <DragDropImageUpload
                  icon={bigBluePlus}
                  iconText="Sürükle bırak veya + tuşuna bas"
                />
              </div>
              <p className={styles.inputFieldSubText}>
                Yüksek kaliteli, her açıdan çekilmiş fotoğraflar ekle (maks. 15
                fotoğraf)
              </p>
            </div>
            <div className={styles.fieldWrapper}>
              <h5>Başlık</h5>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id="title"
                  name="title"
                  // value={inputValues.name}
                  placeholder="2+1 otoparklı ev"
                  // onChange={handleOnChange}
                />
              </div>
              <p className={styles.inputFieldSubText}>
                Kısa ve öz bir başlık yaz (maks. 60 karakter)
              </p>
            </div>
            <div className={styles.fieldWrapper}>
              <h5>Açıklama</h5>
              <div
                className={styles.inputContainer + " " + styles.textAreaInput}
              >
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  // value={inputValues.name}
                  placeholder="İlan ile ilgili detaylı açıklamaları giriniz"
                  maxLength={500}
                  // onChange={handleOnChange}
                />
              </div>
              <p className={styles.inputFieldSubText}>
                Detaylı bir açıklama yaz (maks. 500 karakter)
              </p>
            </div>
            <div className={styles.fieldWrapper}>
              <h5>Not:</h5>
              <p>
                İlan detaylarını istediğin zaman “İlanlarım” sayfasından
                değiştirebilirsin.
              </p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.fieldWrapper}>
              <h5>Adres</h5>
              <div
                className={styles.inputContainer + " " + styles.textAreaInput}
              >
                <textarea
                  type="text"
                  id="address"
                  name="address"
                  // value={inputValues.name}
                  placeholder="İlan adresini giriniz"
                  maxLength={500}
                  // onChange={handleOnChange}
                />
              </div>
              <p className={styles.inputFieldSubText}>
                Adresini sadece onay verdiğin kişiler görür
              </p>
            </div>
            <div className={styles.fieldWrapper}>
              <div className={styles.selectInputWrapper}>
                <div className={styles.leftSelect}>
                  <h5>İl</h5>
                  <div className={styles.inputContainer}>
                    <SelectInput
                      data={dropdownData}
                      placeholder="İl seçiniz..."
                      dropdownIsHiddenIcon={<DownArrow />}
                      dropdownIsVisibleIcon={<DownArrow />}
                    />
                  </div>
                </div>
                <div className={styles.rightSelect}>
                  <h5>İlçe</h5>
                  <div className={styles.inputContainer}>
                    <SelectInput
                      data={dropdownData}
                      placeholder="İlçe seçiniz..."
                      dropdownIsHiddenIcon={<DownArrow />}
                      dropdownIsVisibleIcon={<DownArrow />}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.fieldWrapper}>
              <h5>Aradığın özellikler</h5>
              <TagInputField
                tagList={tagList}
                leftContainerChildren={
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      // value={inputValues.name}
                      placeholder="Etiketlerde ara"
                      // onChange={handleOnChange}
                    />
                  </div>
                }
                rightContainerChildren={
                  <div style={{ fontSize: "1.2rem" }}>Eklenenler</div>
                }
              />
              <p className={styles.inputFieldSubText}>(maks. 6 etiket)</p>
            </div>
            <div className={styles.fieldWrapper}>
              <h5>Tercih etmediğin özellikler</h5>
              <TagInputField
                tagList={tagList}
                leftContainerChildren={
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      // value={inputValues.name}
                      placeholder="Etiketlerde ara"
                      // onChange={handleOnChange}
                    />
                  </div>
                }
                rightContainerChildren={
                  <div style={{ fontSize: "1.2rem" }}>Eklenenler</div>
                }
              />
              <p className={styles.inputFieldSubText}>(maks. 6 etiket)</p>
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button
            className={
              btnStyles.btn + " " + btnStyles.secondary + " " + styles.btn
            }
            buttonText="İptal Et"
          />
          <Button
            className={
              btnStyles.btn + " " + btnStyles.primary + " " + styles.btn
            }
            buttonText="Kaydet"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAdvertisementPage;
