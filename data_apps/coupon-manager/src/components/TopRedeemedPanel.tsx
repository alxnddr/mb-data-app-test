import { InteractiveQuestion } from "@metabase/embedding-sdk-react";
import {
  aggregations,
  breakout,
  orderBy,
  useMetabaseQueryObject,
} from "@metabase/embedding-sdk-react/data-app";

import schema from "../metabase.data";
import Spinner from "./Spinner";

const enrichedTable = schema.tables.couponRedemptionsEnriched;
const redemptionCount = aggregations.count();

export default function TopRedeemedPanel() {
  const { query, isLoading, error } = useMetabaseQueryObject({
    source: enrichedTable,
    aggregations: [redemptionCount],
    breakouts: [breakout(enrichedTable.fields.couponCode)],
    orderBys: [orderBy(redemptionCount, "desc")],
    limit: 10,
  });

  if (error) {
    return (
      <pre
        style={{
          whiteSpace: "pre-wrap",
          margin: 0,
          padding: 12,
          color: "#b91c1c",
          fontSize: 12,
        }}
      >
        {String(error)}
      </pre>
    );
  }

  if (isLoading || !query) {
    return <Spinner label="Loading top coupons…" />;
  }

  return (
    <InteractiveQuestion card={{ query, visualization: "row" }}>
      <InteractiveQuestion.QuestionVisualization height="440px" />
    </InteractiveQuestion>
  );
}
