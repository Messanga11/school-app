import Loading from "@/components/basics/Loading";
import LoadingComponent from "@/components/LodingComponent";
import { getSubjectsEffect } from "@/store/effects/subject";
import { ApplicationState } from "@/store/types";
import { useLoginChecker } from "@/utils/hooks";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import Subject from "../../components/Subject";
import DashboardLayout from "../../layouts/DashboardLayout";

const MyCourses = () => {
  // Hooks
  const dispatch = useDispatch();
  useLoginChecker();

  // Store
  const {
    subject: { subject_data },
  } = useSelector((state: ApplicationState) => state);


  // State
  const [loading, setLoading] = useState<boolean>(false)

  // Functions
  const fetchSubjects = useCallback((): void => {
    dispatch(
      getSubjectsEffect({
        range: {
          page: 1,
          per_page: 10,
          order_field: "date_added",
        },
        failCb: (): void => {},
        successCb: (): void => {},
        setLoading
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  return (
    <DashboardLayout>
      <Container className="flex flex-col h-full">
          {loading && (
              <LoadingComponent />
          )}
        {!loading && subject_data.data.length !== 0 && (
            <h2 className="mb-4">My courses</h2>
        )}
        <div>
          <div>
            {!loading && subject_data.data.length === 0 && (
                <p className="text-center">No course at now</p>
            )}
            <div className="grid grid-cols-4 gap-4 p-4 rounded-md bg-gray-50">
              {subject_data.data.map((subject) => (
                <Subject key={subject?.uuid} subject={subject} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </DashboardLayout>
  );
};

export default MyCourses;
