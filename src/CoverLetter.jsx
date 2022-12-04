import { useState, useEffect, useRef } from "react";
import { storage } from "./firebase";
import {
  getDownloadURL,
  deleteObject,
  listAll,
  getMetadata,
} from "firebase/storage";

import { GrUpload } from "react-icons/gr";
import { BsFiles } from "react-icons/bs";
import styles from "./css/cover_letter.module.scss";

const CoverLetter = () => {
  const [fileURLs, setFileURLs] = useState([]);
  const uploadRef = useRef();

  const onClickUpload = (e) => {
    uploadRef.current.click();
  };

  const onClickDownlaod = (e, url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  const onChangeFile = (e) => {
    const file = e.target.files[0];

    if (file === "") {
      window.alert("파일을 선택해주세요.");
      return;
    }
    // 업로드 처리
    console.log("업로드 처리");
    const storageRef = storage.ref("cv/test/"); //어떤 폴더 아래에 넣을지 설정
    const fileRef = storageRef.child(file.name); //파일명

    console.log("파일을 업로드");
    const upLoadTask = fileRef.put(file);
    console.log("태스크 실행 전");

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      (error) => {
        console.log("err 발생 -> ", error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileURLs([...fileURLs, { name: file.name, url: downloadURL }]);
        });
      }
    );
  };

  const onClickDelete = (e, fileName) => {
    e.stopPropagation();

    const deleteFile = storage.ref(`cv/test/${fileName}`);

    deleteObject(deleteFile)
      .then(() => {
        console.log('deletion succeeds.')
        setFileURLs(fileURLs.filter(ele => ele.name !== fileName));
      })
      .catch((error) => {
        console.log("err 발생 -> ", error);
      });
  };

  useEffect(() => {
    // Create a reference under which you want to list
    const listRef = storage.ref("cv/test/");

    // Find all the prefixes and items.
    listAll(listRef)
      .then((response) => {
        response.items.forEach((itemRef) => {
          getMetadata(itemRef).then((metadata) => {
            const fileName = metadata.name;
            getDownloadURL(storage.ref(`cv/test/${fileName}`))
              .then((downloadURL) => {
                setFileURLs((prev) => [
                  ...prev,
                  { name: fileName, url: downloadURL },
                ]);
              })
              .catch((error) => {
                console.log("err 발생 -> ", error);
              });
          });
        });
      })
      .catch((error) => {
        console.log("file list load Error");
      });
  }, []);

  return (
    <div className={`${styles.cover_letter}`}>
      <div>
        <h4>최근 문서</h4>
        <div className={`${styles.cv_flex_container}`}>
          <div className={`${styles.create_cv}`} role="button">
            <div className={`${styles.icon_wrapper}`}>
              <BsFiles />
            </div>
            <div>새 이력서 작성</div>
          </div>
          <div className={`${styles.upload_input}`} onClick={onClickUpload}>
            <input
              type="file"
              multiple
              onChange={onChangeFile}
              ref={uploadRef}
            />
            <div className={`${styles.icon_wrapper}`}>
              <GrUpload />
            </div>
            <div>파일 업로드</div>
          </div>
          {fileURLs.map((ele, idx) => {
            console.log(ele);
            return (
              <div
                key={idx}
                className={`${styles.cv_file}`}
                onClick={(e) => onClickDownlaod(e, ele.url)}
              >
                <div>{ele.name}</div>
                <div>첨부완료</div>
                <div className={`${styles.delete_btn}`} onClick={e => onClickDelete(e, ele.name)}>
                  X
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
