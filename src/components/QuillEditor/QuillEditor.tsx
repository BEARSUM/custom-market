import { Controller, useFormContext } from 'react-hook-form';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * ReactHookForm 과 같이 사용하기 위한 ReactQuill 컴포넌트
 *
 * @example
 * <QuillEditor ref={quillRef} modules={modules} placeholder="내용을 입력해주세요." />
 */

const QuillEditor = ({ modules, placeholder }: ReactQuillProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name="content"
      control={control}
      render={({ field: { value, onChange, ref } }) => (
        <ReactQuill
          placeholder={placeholder}
          modules={modules}
          theme="snow"
          className="h-56"
          ref={ref}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};

export default QuillEditor;
